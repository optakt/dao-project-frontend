import { notify } from 'helpers/notify';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { clearCacheModal, connectWalletService } from 'services/walletConnectionService';
import Web3 from 'web3';

const MainContext = createContext();

function MainContextProvider({ ...props }) {

    const [account, setAccount] = useState(undefined);
    const [provider, setProvider] = useState(Web3.givenProvider);
    const [connected, setConnected] = useState(false);

    const connectWallet = useCallback(() => {
        if (connected) {
            setConnected(false);
            setAccount(undefined);
            setProvider(undefined);
            notify('Disconnected from wallet');
            return;
        }

        (async () => {

            const { accounts, provider } = await connectWalletService();
            setAccount(accounts[0]);
            setConnected(true);
            setProvider(provider);
            notify('Connected to wallet successfully')
        })();



    }, [connected])

    useEffect(() => {

        clearCacheModal();

    }, [])

    // Logging out changes in the context
    useEffect(() => {
        console.log({ account })
    }, [account]);

    useEffect(() => {
        console.log({ provider })
    }, [provider]);

    return (
        <MainContext.Provider
            value={{
                connectWallet,
                account,
                provider,
                connected,
            }}
            {...props}
        />
    );
}

function useMainContext() {


    return useContext(MainContext);
}

export { MainContextProvider, useMainContext };