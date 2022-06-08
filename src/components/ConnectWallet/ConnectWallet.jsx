import { Button } from '@mui/material'
import React, { useState } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import './ConnectWallet.scss'



function ConnectWallet() {

    //
    // Connection Logic
    //
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState(undefined);
    const [provider, setProvider] = useState(undefined);

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: '994ffbdba376443ba4b5bb1e714467d1',
            },
        },
    };

    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: false,
        providerOptions,
    });

    web3Modal.clearCachedProvider();

    console.log({ account, provider })


    const connect = async () => {
        if (connected) {
            setConnected(false);
            return;
        }
        const tempProvider = await web3Modal.connect();

        const web3 = new Web3(tempProvider);

        try {
            const accounts = await web3.eth.getAccounts();

            console.log({ accounts });
            setAccount(accounts[0]);
            setConnected(true);
            setProvider(tempProvider);

            // await checkApproval(inputCurrency.name, outputCurrency.name, accounts[0]);

            // notify({
            //     type: 'Success',
            //     message: 'Connected to wallet successfully',
            // });

            console.log('Connected to wallet successfully');
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div>
            <Button
                variant='outlined'
                color='primary'
                onClick={connect}
            >
                Connect Wallet
            </Button>
        </div>
    )
}

export default ConnectWallet