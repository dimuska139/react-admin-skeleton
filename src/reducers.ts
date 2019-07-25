import {combineReducers} from 'redux';
import {UsersAppState} from "users/store/states";
import {UsersReducer} from "users/store/reducers";


export interface StateInterface {
    users: UsersAppState;
}

export const state = combineReducers<StateInterface>({
    users: UsersReducer,
});