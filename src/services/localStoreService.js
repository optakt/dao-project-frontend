import Web3 from 'web3';
const LOCAL_STORE_KEY = 'localStorePolls';

export const getAllPolls = () => {
    const polls = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY) || '[]');

    return polls
}

export const insertPoll = (poll) => {
    const _id = Web3.utils.randomHex(24)
    const newPoll = { ...poll, _id };
    const polls = getAllPolls();
    const updatedPolls = [...polls, newPoll];

    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(updatedPolls));

    return newPoll;
}
