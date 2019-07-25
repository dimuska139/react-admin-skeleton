import {User} from "users/models";

export interface UsersListState {
    users: User[];
    isLoading: boolean;
}