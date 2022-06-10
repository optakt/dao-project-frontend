import { Button } from '@mui/material'
import React from 'react'

import { useMainContext } from 'context/MainContext';
import './ConnectWallet.scss'


function ConnectWallet() {
    const { account, connected, connectWallet } = useMainContext();


    const connect = async () => {
        await connectWallet();
    }

  




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