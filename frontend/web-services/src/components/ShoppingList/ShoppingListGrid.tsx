import React from "react";
import {ShoppingListCard} from "./index";
import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    emptyCard: {
        width: theme.spacing(60),
    }
}))

export default function ShoppingListGrid() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.emptyCard}>
                <ShoppingListCard/>
            </div>
        </div>
    )
}