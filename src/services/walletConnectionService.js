import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

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


export const connectWalletService = async () => {

    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();

    const wallet = await web3.eth.accounts.wallet

    if (!provider || !accounts || !wallet || accounts.length < 1) throw new Error('No accounts found');


    return {
        accounts,
        provider,
        wallet
    }


};

export const clearCacheModal = () => {
    web3Modal.clearCachedProvider();
}