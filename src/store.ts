import {Store, createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {state, StateInterface} from "./reducers";

export const store: Store<StateInterface> = createStore(
    state,
    compose(
        applyMiddleware(reduxThunk),
    )
);