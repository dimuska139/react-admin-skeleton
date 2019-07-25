import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";
import {createStyles, ListItemIcon, ListItemText, MenuItem, MenuList, Theme} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import ArtTrack from '@material-ui/icons/ArtTrack';
const classNames = require('classnames');

const useStyles = makeStyles((theme: Theme) => createStyles({
    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none"
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
    },
    menuLink: {
        ...commonStyles.defaultFont,
        width: 'auto',
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent",
    },
    menuIcon: {
        width: "24px",
        height: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(255, 255, 255, 0.8)"
    },
    menuText: {
        ...commonStyles.defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: "#FFFFFF"

    },
    active: {
        backgroundColor: commonStyles.successColor,
        boxShadow:
            "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)",
        "&:hover": {
            backgroundColor: commonStyles.successColor,
            boxShadow:
                "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
        }
    }
}));

let menuItems = [
    {
        name: "Пользователи",
        path: "/users",
        icon: ArtTrack,
    }
];

export const SidebarMenu: React.FC = () => {
    const classes = useStyles();

    const isActive = (routeName: string) => {
        const firstPathnamePart = window.location.pathname.split('/')[1];

        const orderedRoutes = (menuItems.slice()).sort(function(a, b){
            return a.path.length === b.path.length?0 : +(a.path.length < b.path.length) || -1;
        });

        for (let i=0; i<orderedRoutes.length; i++) {
            const route = orderedRoutes[i];
            if (route.path === routeName && "/" + firstPathnamePart === routeName) {
                return true;
            }
        }

        return false;
    };

    return (
        <MenuList className={classes.list}>
            {menuItems.map((prop, key) => {
                return (
                    <NavLink
                        exact
                        to={prop.path}
                        className={classes.item}
                        activeClassName="active"
                        key={key}
                    >
                        <MenuItem button className={classNames({[classes.active]: isActive(prop.path), [classes.menuLink]: true})} key={prop.path}>
                            <ListItemIcon className={classes.menuIcon}>
                                <prop.icon />
                            </ListItemIcon>
                            <ListItemText
                                primary={prop.name}
                                className={classes.menuText}
                                disableTypography={true}
                            />
                        </MenuItem>
                    </NavLink>
                );
            })}
        </MenuList>
    );
};
