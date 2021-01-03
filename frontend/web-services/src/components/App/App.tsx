import React from "react";
import ApiProvider from "../Api";
import {ToastContainer} from "react-toastify";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container, createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider, Theme} from "@material-ui/core";
import * as ROUTES from "../../constant/routes";
import ShoppingListGrid from "../ShoppingList";
import Navigation from "../Navigation";

const theme = createMuiTheme({
    // overrides: {
    //     MuiCardContent: {
    //         root: {
    //             padding: 0,
    //             "&:last-child": {
    //                 paddingBottom: 0,
    //             },
    //         },
    //     },
    // },
});

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    contentContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
}))

function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <ApiProvider>
                <Router>
                    <ToastContainer
                        position="top-right"
                        autoClose={1800}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className={classes.root}>
                        <Navigation/>
                        <Container maxWidth={false} className={classes.contentContainer}>
                            <Switch>
                                <Route exact path={ROUTES.LANDING} component={ShoppingListGrid}/>
                                <Route path={ROUTES.PRODUCT} component={ShoppingListGrid}/>
                                <Route path={ROUTES.SHOP} component={ShoppingListGrid}/>
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </ApiProvider>
        </MuiThemeProvider>
    );
}

export default App;
