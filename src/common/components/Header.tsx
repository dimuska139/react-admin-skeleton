import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";
import {createStyles, Theme} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/icons/Menu';
import {useDispatch} from "react-redux";
import {authActions} from "users/store/actions";

const useStyles = makeStyles((theme: Theme) => createStyles({
    logout: {
        float: "right"
    },
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        width: "100%",
        paddingTop: "10px",
        zIndex: 1029,
        color: "#555555",
        border: "0",
        borderRadius: "3px",
        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block"
    },
    container: {
        ...commonStyles.container,
        minHeight: "50px",
    },
    flex: {
        flex: 1
    },
    title: {
        ...commonStyles.defaultFont,
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        "&:hover,&:focus": {
            background: "transparent"
        }
    },
    appResponsive: {
        top: "8px"
    },
    primary: {
        backgroundColor: commonStyles.primaryColor,
        color: "#FFFFFF",
        ...commonStyles.defaultBoxShadow
    },
    info: {
        backgroundColor: commonStyles.infoColor,
        color: "#FFFFFF",
        ...commonStyles.defaultBoxShadow
    },
    success: {
        backgroundColor: commonStyles.successColor,
        color: "#FFFFFF",
        ...commonStyles.defaultBoxShadow
    },
    warning: {
        backgroundColor: commonStyles.warningColor,
        color: "#FFFFFF",
        ...commonStyles.defaultBoxShadow
    },
    danger: {
        backgroundColor: commonStyles.dangerColor,
        color: "#FFFFFF",
        ...commonStyles.defaultBoxShadow
    }
}));

interface HeaderProps {
    toggleDrawer: () => any
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <Hidden mdDown>
                    <div className={classes.flex}>
                        <Button
                            onClick={() => dispatch(authActions.logout())}
                            variant="contained"
                            color="secondary"
                            className={classes.logout}>{"Выйти"}</Button>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        className={classes.appResponsive}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.toggleDrawer}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

