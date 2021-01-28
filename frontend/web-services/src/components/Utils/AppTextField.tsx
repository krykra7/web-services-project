import {makeStyles, TextField} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        margin: theme.spacing(1),
    },
}))

type Props = {
    name: string;
    value: string;
    label: string;
    onChange: (fieldName: string, fieldValue: string) => void;
}

export default function (props: Props) {
    const classes = useStyles();

    return (
        <TextField
            name={props.name}
            multiline
            variant="outlined"
            className={classes.textField}
            value={props.value}
            label={props.label}
            onChange={(event) => {
                event.preventDefault();
                props.onChange(event.target.name, event.target.value);
            }}
        />
    )
}