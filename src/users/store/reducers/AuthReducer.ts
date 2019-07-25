import {AuthState} from "users/store/states";
import {types} from "users/store/actions/types";
import {User} from "users/models";

const initialState = (): AuthState => ({
    token: localStorage.getItem('token'),
    user: {} as User,
    process: false,
    errors: []
});

export const AuthReducer = (state = initialState(), action: any) => {
    switch (action.type) {
        case types.AUTH_LOGIN_PROCESS:
            return Object.assign({}, state, {
                process: true,
                token: null,
                user: null
            });
        case types.AUTH_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                process: false,
                token: action.payload.token,
                user: action.payload.user,
            });
        case types.AUTH_LOGOUT:
            return Object.assign({}, state, {
                process: false,
                token: null,
                user: null
            });
    }
    return state;
};