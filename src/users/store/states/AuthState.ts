import {User} from "users/models";

export interface AuthState {
    token: any;
    user: User;
    process : boolean;
    errors : string[];
}