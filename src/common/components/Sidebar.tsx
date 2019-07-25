import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import commonStyles from "common/styles";
import {createStyles, Theme} from "@material-ui/core";
import {Logo} from "./Logo";
import {SidebarMenu} from "./SidebarMenu";


const useStyles = makeStyles((theme: Theme) => createStyles({
    background: {
        position: "absolute",
        zIndex: 1,
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: 3,
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: "#000",
            opacity: 0.8
        }
    },
    drawerPaper: {
        border: "none",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: 1,
        ...commonStyles.boxShadow,
        width: commonStyles.drawerWidth,
        [theme.breakpoints.up("md")]: {
            width: commonStyles.drawerWidth,
            position: "fixed",
            height: "100%"
        },
        [theme.breakpoints.down("sm")]: {
            width: commonStyles.drawerWidth,
            ...commonStyles.boxShadow,
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            zIndex: 1032,
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            transform: `translate3d(${commonStyles.drawerWidth}px, 0, 0)`,
            ...commonStyles.transition
        }
    },
    sidebarWrapper: {
        position: "relative",
        height: "calc(100vh - 75px)",
        overflow: "auto",
        width: "260px",
        zIndex: 4,
        overflowScrolling: 'touch'
    }
}));

interface SidebarProps {
    open: boolean
    toggleDrawer: () => any
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const classes = useStyles();

    return (
        <>
            <Hidden mdUp>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="temporary"
                    anchor="right"
                    open={props.open}
                    onClose={props.toggleDrawer}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    <Logo />
                    <div className={classes.sidebarWrapper}>
                        <SidebarMenu/>
                    </div>
                    <div
                        className={classes.background}
                    />
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    anchor="left"
                    open
                >
                    <Logo />
                    <div className={classes.sidebarWrapper}>
                        <SidebarMenu/>
                    </div>
                    <div
                        className={classes.background}
                    />
                </Drawer>
            </Hidden>
        </>
    );
};

