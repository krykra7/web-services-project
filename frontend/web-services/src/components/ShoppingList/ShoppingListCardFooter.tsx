import React from "react";
import {Button, IconButton, makeStyles, Theme, Tooltip} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
    deleteHandler: () => void;
    mode: string;
}

export default function ShoppingListCardFooter(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.actions}>
            {props.mode === 'readonly' && <Tooltip title={"Usuń listę"}>
                <IconButton onClick={() => props.deleteHandler()}>
                    <Delete/>
                </IconButton>
            </Tooltip>}
            {props.mode !== 'readonly' && <div>
                <Button size={"small"}
                        onClick={() => props.cancelHandler()}>
                    Anuluj
                </Button>
                <Button size={"small"}
                        color={"primary"}
                        onClick={() => props.saveHandler()}>
                    Zapisz
                </Button>
            </div>}
        </div>
    )
}