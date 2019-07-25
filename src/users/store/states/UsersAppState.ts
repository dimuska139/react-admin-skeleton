import {AuthState} from "./AuthState";
import {UsersListState} from "./UsersListState";

export interface UsersAppState {
    auth: AuthState,
    list: UsersListState
}