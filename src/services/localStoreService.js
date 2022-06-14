
const LOCAL_STORE_KEY = 'localStorePolls';

export const getAllPolls = () => {
    const polls = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY) || '[]');

    return polls
}

export const insertPoll = (poll) => {
    const polls = getAllPolls();
    const updatedPolls = [...polls, poll];

    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(updatedPolls));

    return poll;
}
