import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";
import {createStyles, Theme} from "@material-ui/core";
import {useState} from "react";
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {Footer} from "./Footer";

const container = commonStyles.container;

const useStyles = makeStyles((theme: Theme) => createStyles({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh",
        //backgroundColor: commonStyles.backgroundColor
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${commonStyles.drawerWidth}px)`
        },
        //overflow: "auto",
        position: "relative",
        float: "right",
        ...commonStyles.transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: 'touch'
    },
    container,
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100% - 123px)"
    }
}));

interface LayoutProps {
    children: any
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className={classes.wrapper}>
            <Sidebar open={mobileOpen} toggleDrawer={() => setMobileOpen(!mobileOpen)}/>
            <div className={classes.mainPanel}>
                <Header
                    toggleDrawer={() => setMobileOpen(!mobileOpen)}
                />
                <div className={classes.content}>
                    <div className={classes.container}>{props.children}</div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

