import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import {usersListActions} from "../store/actions";
import {StateInterface} from "reducers";
import {User} from "../models";


export const UsersListPage: React.FC = () => {
    const dispatch = useDispatch();


    useEffect( () => {
        dispatch(usersListActions.fetchAll());
    },[dispatch]);

    const users = useSelector((state: StateInterface) => state.users.list.users);
    const isLoading = useSelector((state: StateInterface) => state.users.list.isLoading);

    return (
        <>
            <h1>Пользователи</h1>
            {isLoading ?
                <LinearProgress/>
                :
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user: User, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {user.id}
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            }

        </>
    );
};

