import {UsersListState} from "users/store/states";
import {types} from "users/store/actions/types";

const initialState = (): UsersListState => ({
    users: [],
    isLoading: false,
});

export const UsersListReducer = (state = initialState(), action: any) => {
    switch (action.type) {
        case types.LIST_LOADING_PROCESS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case types.LIST_LOADING_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                users: action.payload.users,
            });
    }
    return state;
};