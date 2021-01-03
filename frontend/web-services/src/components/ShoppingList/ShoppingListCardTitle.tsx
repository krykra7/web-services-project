import React from "react";
import {InputBase, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    inputRoot: {
        width: '100%',
        margin: theme.spacing(1.5, 2, 2, 2),
    },
    input: {
        fontWeight: 500,
        fontSize: "1rem",
        padding: 0,
        lineHeight: theme.spacing(0.18),
        verticalAlign: "middle",
        color: theme.palette.text.primary
    },
}))

type Props = {
    titleChangeHandler: (title: string) => void;
    focusedChangeHandler: (mode: string) => void;
    title: string;
}

export default function ShoppingListCardTitle(props: Props) {
    const classes = useStyles();

    return (
        <InputBase
            value={props.title}
            classes={{
                root: classes.inputRoot,
                input: classes.input
            }}
            onFocus={() => props.focusedChangeHandler('edit')}
            placeholder={"Tytuł"}
            multiline
            onChange={(e) => props.titleChangeHandler(e.target.value)}
        />
    )
}