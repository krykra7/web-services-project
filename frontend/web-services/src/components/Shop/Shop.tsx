import React, {useContext, useEffect, useReducer} from "react";
import MaterialTable from "material-table";
import {ProductListDto} from "../../dto/ProductListDto";
import {ShopDto} from "../../dto/ShopDto";
import {ApiContext} from "../Api";
import Api from "../Api/api";
import {toast} from "react-toastify";
import {makeStyles, Theme} from "@material-ui/core";
import {ShopForm} from "./index";
import {ShopListDto} from "../../dto/ShopListDto";

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        width: "75%"
    },
    formContainer: {
        paddingTop: theme.spacing(2),
    }
}))

type State = {
    rows: ShopDto[];
    isFormVisible: boolean;
}

type Action = | {
    type: "setRows",
    payload: ShopListDto;
} | {
    type: "deleteShop",
    payload: {
        id: string
    },
} | {
    type: "saveShop",
    payload: ShopDto,
} | {
    type: "setIsFormVisible",
    payload: boolean,
}

const DEFAULT_STATE: State = {
    rows: [] as ShopDto[],
    isFormVisible: false,
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setRows":
            return {...state, rows: action.payload.shopDtoList};
        case "deleteShop":
            let filteredRows = state.rows.filter((row) => row.id !== action.payload.id);

            return {...state, rows: filteredRows, isFormVisible: false};
        case "saveShop":
            let newRows: ShopDto[] = [...state.rows]
            newRows.push(action.payload);

            return {...state, rows: newRows, isFormVisible: false};
        case "setIsFormVisible":
            return {...state, isFormVisible: action.payload};
    }
}

export default function Shop() {
    const classes = useStyles();
    const [state, dispatchAction] = useReducer(reducer, DEFAULT_STATE);
    const api = useContext<Api>(ApiContext);

    useEffect(() => {
        api.getAllShops().then((resp) => {
            dispatchAction({type: "setRows", payload: resp.data});
            toast.success("Pobrano listę sklepów");
        }).catch(() => {
        });
    }, [api])

    const handleAddShop = (shopDto: ShopDto) => {
        api.saveShop(shopDto).then((resp) => {
            dispatchAction({type: "saveShop", payload: resp.data});
            toast.success("Dodano nowy sklep");
        }).catch(() => {
        });
    };

    const handleEditProduct = (shopDto: ShopDto) => {

    };

    const handleDeleteProduct = (id: string) => {
        api.deleteShop(id).then((resp) => {
            toast.success("Usunięto sklep");
            dispatchAction({type: "deleteShop", payload: {id: id}})
        }).catch(() => {
        });
    };

    const handleFormClose = () => {
        dispatchAction({type: "setIsFormVisible", payload: false});
    }

    return (
        <div className={classes.table}>
            <MaterialTable
                title={"Lista sklepów"}
                columns={[
                    {title: "Nazwa", field: "name"},
                ]}
                localization={{
                    body: {},
                    header: {
                        actions: 'Akcje'
                    },
                    pagination: {
                        previousTooltip: 'Poprzednia Strona',
                        nextTooltip: 'Następna Strona',
                        lastTooltip: 'Ostatnia Strona',
                        firstTooltip: 'Pierwsza Strona',
                        labelDisplayedRows: '{from} - {to} z {count}',
                        labelRowsSelect: "wierszy"
                    },
                    toolbar: {
                        searchTooltip: 'Szukaj',
                        searchPlaceholder: 'Szukaj',
                    }
                }}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edytuj produkt',
                        onClick: (event, row: any) => handleEditProduct(row)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Usuń produkt',
                        onClick: (event, row: any) => handleDeleteProduct(row.id)
                    },
                    {
                        icon: 'add',
                        tooltip: 'Dodaj produkt',
                        isFreeAction: true,
                        onClick: () => dispatchAction({type: "setIsFormVisible", payload: true}),
                    },
                ]}
                data={state.rows}
            />
            {state.isFormVisible &&
            <div className={classes.formContainer}>
                <ShopForm saveHandler={handleAddShop} cancelHandler={handleFormClose}/>
            </div>
            }
        </div>
    )
}
;