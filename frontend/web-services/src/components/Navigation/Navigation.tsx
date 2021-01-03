import React from "react";
import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme, Toolbar} from "@material-ui/core";
import ListIcon from '@material-ui/icons/List';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExtensionIcon from '@material-ui/icons/Extension';
import {useHistory} from "react-router-dom";
import * as ROUTES from "../../constant/routes";

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
}))

export default function Navigation() {
    const classes = useStyles();
    const history = useHistory()

    const handleClick = (route: string) => {
        history.push(route);
    }

    return (
        <div>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant={"permanent"}
                anchor={"left"}>
                <List>
                    <ListItem button key={"list"} onClick={() => handleClick(ROUTES.LANDING)}>
                        <ListItemIcon><ListIcon/></ListItemIcon>
                        <ListItemText primary={"Listy zakupów"}/>
                    </ListItem>
                    <ListItem button key={"shop"} onClick={() => handleClick(ROUTES.SHOP)}>
                        <ListItemIcon><StorefrontIcon/></ListItemIcon>
                        <ListItemText primary={"Sklepy"}/>
                    </ListItem>
                    <ListItem button key={"product"} onClick={() => handleClick(ROUTES.PRODUCT)}>
                        <ListItemIcon><ExtensionIcon/></ListItemIcon>
                        <ListItemText primary={"Produkty"}/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}
