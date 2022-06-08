import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import { useMainContext } from 'context/MainContext';
import './ConnectWallet.scss'
import { notify } from 'helpers/notify';


const infuraId = '330f5597349f485b89704ee14455c9eb'; // TODO - Just for testing purposes


const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId,
        },
    },
};

const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: false,
    providerOptions,
});

function ConnectWallet() {
    const { setProvider, account, setAccount }= useMainContext();

    const [connected, setConnected] = useState(false);


    useEffect(() => {
        web3Modal.clearCachedProvider();
    }, [])



    const connect = async () => {
        if (connected) {
            setConnected(false);
            setAccount(undefined);
            setProvider(undefined);
            web3Modal.clearCachedProvider();
            notify('Disconnected from wallet');
            return;
        }
        const tempProvider = await web3Modal.connect();

        const web3 = new Web3(tempProvider);

        try {
            const accounts = await web3.eth.getAccounts();

            setAccount(accounts[0]);
            setConnected(true);
            setProvider(tempProvider);

            notify('Connected to wallet successfully')

        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div className='connectWalletWrapper'>

            <Button
                variant='outlined'
                color='primary'
                onClick={connect}
            >
                {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
            </Button>
            <div className='accountNumber'>{account}</div>
        </div>
    )
}

export default ConnectWallet