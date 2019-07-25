import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from "@material-ui/core/Button";
import {Field, Form} from "react-final-form";
import {Redirect} from "react-router";
import { useDispatch } from 'react-redux';
import FormControl from "@material-ui/core/FormControl";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import commonStyles from "common/styles";
import {authActions} from "../store/actions";
import {FieldError} from "common/components";
import {useState} from "react";
import * as EmailValidator from 'email-validator';

const useStyles = makeStyles({
    formControl: {
        ...commonStyles.formControl
    }
});

const required = (value: string) => value ? undefined : "Это поле обязательно";
const isEmail = (value: string) => EmailValidator.validate(value) ? undefined : "Неправильный email";
const composeValidators = (...validators: any) => (value: string) =>
    validators.reduce((error: any, validator: any) => error || validator(value), undefined);

export const LoginPage: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = async (values: any) => {
        try {
            await dispatch(authActions.login(values.email, values.password));
        } catch (e) {
            return e;
        }
        setIsAuth(true);
    };

    const classes = useStyles();
    const [isAuth, setIsAuth] = useState(false);

    let submit: any;
    return (
        <>
            {isAuth && <Redirect to="/"/>}
            <Dialog open={true}>
                <DialogTitle>{"Авторизация"}</DialogTitle>
                <DialogContent>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => {
                            submit = handleSubmit;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <Field
                                        name="email"
                                        component="input"
                                        type="email"
                                        validate={composeValidators(required, isEmail)}
                                        required
                                    >
                                        {({ input, meta, ...rest }) => (
                                            <FormControl className={classes.formControl}>
                                                <TextField
                                                    autoFocus
                                                    label="Email"
                                                    {...input} {...rest}
                                                    error={!!meta.error || !!meta.submitError}
                                                />
                                                {(meta.error || meta.submitError) && meta.touched && (
                                                    <FieldError text={meta.error || meta.submitError}/>
                                                )}
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field
                                        name="password"
                                        component="input"
                                        type="password"
                                        validate={composeValidators(required)}
                                        required
                                    >
                                        {({ input, meta, ...rest }) => (
                                            <FormControl className={classes.formControl}>
                                                <TextField
                                                    label="Пароль"
                                                    {...input} {...rest}
                                                    error={!!meta.error || !!meta.submitError}
                                                />
                                                {(meta.error || meta.submitError) && meta.touched && (
                                                    <FieldError text={meta.error || meta.submitError}/>
                                                )}
                                            </FormControl>
                                        )}
                                    </Field>
                                    {submitError && <FieldError text={submitError} />}
                                </form>
                            )
                        }}/>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={event => {
                            submit(event);
                        }}
                    >
                        {"Войти"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};