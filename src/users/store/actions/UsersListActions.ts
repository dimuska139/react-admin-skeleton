import { types } from './types';
import {User} from "users/models/User";
const faker = require('faker');

const fetchAll = () => (dispatch: any) => {
    dispatch(listLoadingProcess());

    // Просто заглушка
    return new Promise(function(resolve, reject) {
        // Ждем 1 с, чтобы сымитировать процесс обращения к серверу.
        setTimeout(() => {
            let users = [];
            for (let i=0; i<1000; i++) {
                users.push({
                    id: i + 1,
                    email: faker.internet.email(),
                    name: faker.name.findName(),
                    phone: faker.phone.phoneNumber()
                })
            }
            resolve(users)

        }, 1000);
    })
        .then(function(response) {
            dispatch(listLoadingSuccess(response as User[]));
            return response
        })
    // Ошибку не обрабатываю
};

const listLoadingProcess = () => ({
    type: types.LIST_LOADING_PROCESS
});

const listLoadingSuccess = (users: User[]) => ({
    type: types.LIST_LOADING_SUCCESS,
    payload: {
        users: users,
    }
});

export const usersListActions = {
    fetchAll,
};