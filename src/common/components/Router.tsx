import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPage} from "users/components";
import { useSelector } from 'react-redux';
import {MainPage} from "./MainPage";
import {StateInterface} from "reducers";
import {Layout} from "./Layout";
import {UsersListPage} from "../../users/components/UsersListPage";

export const Router: React.FC = () => {
    const token = useSelector((state: StateInterface) => state.users.auth.token);
    return (
        <>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Layout>
                    <Route exact path="/users" component={UsersListPage} />
                    <Route exact path="/" component={MainPage} />
                </Layout>
            </Switch>
            {!token && <Redirect to={"/login"} />}
        </>
    );
};
