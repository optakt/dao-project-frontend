import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

const MainContext = createContext();

function MainContextProvider({ ...props }) {

    const [account, setAccount] = useState(undefined);
    const [provider, setProvider] = useState(Web3.givenProvider);


    useEffect(() => {
        console.log({ account })
    }, [account]);

    useEffect(() => {
        console.log({ provider })
    }, [provider]);

    return (
        <MainContext.Provider
            value={{
                account,
                setAccount,
                provider,
                setProvider
            }}
            {...props}
        />
    );
}

function useMainContext() {
  

    return useContext(MainContext);
}

export { MainContextProvider, useMainContext };