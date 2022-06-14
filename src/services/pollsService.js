import { getAllPolls, insertPoll } from "./localStoreService";

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

export const isUserAllowed = (token) => {
    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(FAKE_authUsers.includes(token) || true); // Dummy auth for testing purposes

        }, 200);

    });
}

export const createPoll = (poll) => {
    
    return new Promise((resolve) => {

        setTimeout(() => { resolve(insertPoll(poll)); }, 200);

    });
}

export const fetchPolls = () => {
    return new Promise((resolve) => {

        setTimeout(() => { resolve(getAllPolls()); }, 200);

    });
}