import { combineReducers } from 'redux';
import {AuthReducer} from "./AuthReducer";
import {UsersAppState} from "users/store/states";
import {UsersListReducer} from "./UsersListReducer";

export const UsersReducer = combineReducers<UsersAppState>({
    auth: AuthReducer,
    list: UsersListReducer,
});