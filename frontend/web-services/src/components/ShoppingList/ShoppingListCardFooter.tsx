import React from "react";
import {Button, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    actions: {
        width: '100%',
        textAlign: 'right',
        '& button': {
            marginLeft: theme.spacing(2),
        }
    },
}));

type Props = {
    cancelHandler: () => void;
    saveHandler: () => void;
}

export default function ShoppingListCardFooter(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.actions}>
            <Button size={"small"}
                    onClick={() => props.cancelHandler()}>
                Anuluj
            </Button>
            <Button size={"small"}
                    color={"primary"}
                    onClick={() => props.saveHandler()}>
                Zapisz
            </Button>
        </div>
    )
}