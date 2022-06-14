import { getAllPolls, insertPoll } from "./localStoreService";
import { add } from 'date-fns'
import Web3 from 'web3';

const FAKE_authUsers = [
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9Eff',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E01',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E02',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E03',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E04',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E05',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E06',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E07',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E08',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E09',
    '0xfEaEf71aBdC43CBc99CAc158dA7F64a556Ed9E0a',
]

const TIME_LOCK_POLL=  { hours: 1 }; // 1 hour

export const isUserAllowed = (token) => {
    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(FAKE_authUsers.includes(token) || true); // Dummy auth for testing purposes

        }, 200);

    });
}

export const createPoll = (poll) => {

    const _id = Web3.utils.randomHex(24);
    const timeLock = add(new Date(),TIME_LOCK_POLL);

    const newPoll = { ...poll,timeLock, _id };
    return new Promise((resolve) => {

        setTimeout(() => { resolve(insertPoll(newPoll)); }, 200);

    });
}

export const fetchPolls = () => {
    return new Promise((resolve) => {

        setTimeout(() => { resolve(getAllPolls()); }, 200);

    });
}