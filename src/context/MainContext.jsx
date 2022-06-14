import { notify } from 'helpers/notify';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { createPoll, fetchPolls, isUserAllowed } from 'services/pollsService';
import { clearCacheModal, connectWalletService } from 'services/walletConnectionService';
import Web3 from 'web3';

const MainContext = createContext();

function MainContextProvider({ ...props }) {

    const [account, setAccount] = useState(undefined);
    const [provider, setProvider] = useState(Web3.givenProvider);
    const [connected, setConnected] = useState(false);

    const [pollList, setPollList] = useState([])

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

            const firstAccount = accounts[0];

            const isAuthorized = await isUserAllowed(firstAccount);

            if (!isAuthorized) return;

            setAccount(accounts[0]);
            setConnected(true);
            setProvider(provider);
            notify('Connected to wallet successfully')
        })();



    }, [connected])

    const insertPoll = async (poll) => {
        const createdPoll = await createPoll(poll);

        if (createdPoll) {
            setPollList(oldPolls => [...oldPolls, createdPoll])
            notify('Poll created successfully');

        } else {
            notify('Error creating poll');
        }
    };

    useEffect(() => {
        (async () => {
            const polls = await fetchPolls();
            setPollList(polls);
        })();
        
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
                insertPoll,
                pollList,
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