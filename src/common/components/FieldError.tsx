import * as React from 'react';
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from '@material-ui/styles';
import commonStyles from "common/styles";

const useStyles = makeStyles({
    error: {
        color: commonStyles.dangerColor
    }

});

interface FieldErrorProps {
    text: string,
}

export const FieldError: React.FC<FieldErrorProps> = (props: FieldErrorProps) => {
    const classes = useStyles();
    const {text} = props;
    return (
        <FormHelperText className={classes.error}>{text}</FormHelperText>
    );
};

