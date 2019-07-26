import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";
import {createStyles, Theme} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const classNames = require('classnames');

const useStyles = makeStyles((theme: Theme) => createStyles({
    breadcrumbsContainer: {
        paddingTop: theme.spacing(2),
        whiteSpace: "nowrap",
    },
    breadcrumbs: {
        display: "inline-block",
        flexWrap: "wrap",
        margin: 0,
        padding: 0,
        listStyle: "none",
        borderRadius: "0rem",
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    },
    breadcrumbsItem: {
        display: "inline-block",
        "&:before": {
            display: "inline-block",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
            color: commonStyles.mutedColor,
            content: '"/"'
        }
    },
    breadcrumbsItemFirst: {
        display: "inline-block",
    },

    breadcrumbsLink: {
        ...commonStyles.link
    },
    active: {
        cursor: "default",
        color: "#6c757d",
        textDecoration: "none"
    }
}));

interface Step {
    name: string;
    path: string;
}

interface BreadcrumbsProps {
    steps: Step[],
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
    const classes = useStyles();
    const {steps} = props;
    return (
        <div className={classes.breadcrumbsContainer}>
            <ol
                className={classes.breadcrumbs}
                itemScope
                itemType="http://schema.org/BreadcrumbList"
            >
                {steps.map((step: Step, index: number) => {
                    return (
                        <li
                            key={index}
                            className={classNames({[classes.breadcrumbsItem]: index != 0}, {[classes.breadcrumbsItemFirst]: index == 0})}
                            itemScope
                            itemProp="itemListElement"
                            itemType="http://schema.org/ListItem"

                        >
                            {index != steps.length - 1?
                                <NavLink
                                    to={step.path}
                                    activeClassName="active"
                                    key={index}
                                >
                                    <span itemProp="item" className={classes.breadcrumbsLink}>
                                        <span itemProp="name">{step.name}</span>
                                    </span>
                                </NavLink>
                                :
                                <span itemProp="item" className={classes.active}>
                                        <span itemProp="name">{step.name}</span>
                                    </span>
                            }
                            <meta
                                itemProp="position"
                                content={(index+1).toString()}
                            />
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};

