import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";
import {createStyles, Theme} from "@material-ui/core";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) => createStyles({
    logo: {
        position: "relative",
        padding: "15px 15px",
        zIndex: 4,
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",

            height: "1px",
            right: "15px",
            width: "calc(100% - 30px)",
            backgroundColor: "rgba(180, 180, 180, 0.3)"
        }
    },
    logoLink: {
        ...commonStyles.defaultFont,
        textTransform: "uppercase",
        padding: "5px 0",
        display: "block",
        fontSize: "18px",
        textAlign: "left",
        fontWeight: 400,
        lineHeight: "30px",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
            color: "#FFFFFF"
        }
    },
    logoImage: {
        width: "30px",
        display: "inline-block",
        maxHeight: "30px",
        marginLeft: "10px",
        marginRight: "15px"
    },
    img: {
        height: "2rem",
        top: "22px",
        position: "absolute",
        verticalAlign: "middle",
        border: "0"
    }
}));

const logo = require('./logo.png');

export const Logo: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <NavLink
                to={'/'}
                className={classes.logoLink}
            >
                <div className={classes.logoImage}>
                    <img src={logo} alt="logo" className={classes.img} />
                </div>
                {"ADMIN SKELETON"}
            </NavLink>
        </div>
    );
};

