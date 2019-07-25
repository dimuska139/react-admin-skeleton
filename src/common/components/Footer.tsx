import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";
import {createStyles, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const container = commonStyles.container;

const useStyles = makeStyles((theme: Theme) => createStyles({
    block: {
        color: "inherit",
        padding: "15px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block",
        ...commonStyles.defaultFont,
        fontWeight: 500,
        fontSize: "12px"
    },
    left: {
        float: "left",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        fontSize: "14px",
        float: "right"
    },
    footer: {
        bottom: "0",
        borderTop: "1px solid #e7e7e7",
        padding: "15px 0",
        ...commonStyles.defaultFont
    },
    container,
    a: {
        color: commonStyles.primaryColor,
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        paddingTop: "0px",
        width: 'auto'
    }
}));


export const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a href="#home" className={classes.block}>
                                Home
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="#company" className={classes.block}>
                                Company
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="#portfolio" className={classes.block}>
                                Portfolio
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="#blog" className={classes.block}>
                                Blog
                            </a>
                        </ListItem>
                    </List>
                </div>
                <p className={classes.right}>
                    <span>
                        &copy; 2018 {" "}
                        <a href="http://www.creative-tim.com" className={classes.a}>
                        Creative Tim
                        </a>, made with love for a better web
                    </span>
                </p>
            </div>
        </footer>
    );
};

