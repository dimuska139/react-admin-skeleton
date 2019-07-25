import { types } from './types';
import axios from 'axios';
import {User} from "users/models";
import {processErrors} from "common/helpers";

const  buildUrl = require('build-url');

const login = (email: string, password: string) => (dispatch: any) => {
    dispatch(loginProcess());


    // Просто заглушка
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const adminEmail = 'admin@admin.test';
            const adminPassword = 'password';
            if (email == adminEmail && password == adminPassword) {
                resolve({
                    'token': 'testtoken',

                })
            } else {
                reject({
                    'non_field_errors': ['Логин или пароль неправильный. Попробуй email: ' + adminEmail + ', пароль: ' + adminPassword]
                })
            }
        }, 1000);
    })
        .then(function(response: any) {
            const token = response['token'];
            localStorage.setItem('token', token);
            //dispatch(loginSuccess(token, null));
            return response
        })
        .catch(function(error) {
            return Promise.reject(processErrors(error));
        });
};

const loginProcess = () => ({
    type: types.AUTH_LOGIN_PROCESS
});

const loginSuccess = (token: string, user: User) => ({
    type: types.AUTH_LOGIN_SUCCESS,
    payload: {
        token: token,
        user: user,
    }
});

const logout = () => (dispatch: any) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
};

const logoutSuccess = () => ({
    type: types.AUTH_LOGOUT,
});

export const authActions = {
    login,
    logout
};