import React, {useContext, useEffect, useReducer} from "react";
import MaterialTable from "material-table";
import {ProductListDto} from "../../dto/ProductListDto";
import {ProductDto} from "../../dto/ProductDto";
import {ApiContext} from "../Api";
import Api from "../Api/api";
import {toast} from "react-toastify";
import {makeStyles, Theme} from "@material-ui/core";
import {ProductForm} from "./index";

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        width: "75%"
    },
    formContainer: {
        paddingTop: theme.spacing(2),
    }
}))

type State = {
    rows: ProductDto[];
    isFormVisible: boolean;
}

type Action = | {
    type: "setRows",
    payload: ProductListDto;
} | {
    type: "deleteProduct",
    payload: {
        id: string
    },
} | {
    type: "saveProduct",
    payload: ProductDto,
} | {
    type: "setIsFormVisible",
    payload: boolean,
}

const DEFAULT_STATE: State = {
    rows: [] as ProductDto[],
    isFormVisible: false,
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setRows":
            return {...state, rows: action.payload.productDtoList};
        case "deleteProduct":
            let filteredRows = state.rows.filter((row) => row.id !== action.payload.id);

            return {...state, rows: filteredRows, isFormVisible: false};
        case "saveProduct":
            let newRows: ProductDto[] = [...state.rows]
            newRows.push(action.payload);

            return {...state, rows: newRows, isFormVisible: false};
        case "setIsFormVisible":
            return {...state, isFormVisible: action.payload};
    }
}

export default function Product() {
    const classes = useStyles();
    const [state, dispatchAction] = useReducer(reducer, DEFAULT_STATE);
    const api = useContext<Api>(ApiContext);

    useEffect(() => {
        api.getAllProducts().then((resp) => {
            dispatchAction({type: "setRows", payload: resp.data});
            toast.success("Pobrano listę produktów");
        }).catch(() => {
        });
    }, [api])

    const handleAddProduct = (productDto: ProductDto) => {
        api.saveProduct(productDto).then((resp) => {
            dispatchAction({type: "saveProduct", payload: resp.data});
            toast.success("Dodano nowy produkt");
        }).catch(() => {
        });
    };

    const handleEditProduct = (productDto: ProductDto) => {

    };

    const handleDeleteProduct = (id: string) => {
        api.deleteProduct(id).then((resp) => {
            toast.success("Usunięto produkt");
            dispatchAction({type: "deleteProduct", payload: {id: id}})
        }).catch(() => {
        });
    };

    const handleFormClose = () => {
        dispatchAction({type: "setIsFormVisible", payload: false});
    }

    return (
        <div className={classes.table}>
            <MaterialTable
                title={"Lista produktów"}
                columns={[
                    {title: "Nazwa", field: "name"},
                    {title: "Typ", field: "type"},
                    {title: "Rozmiar", field: "size"}
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
                <ProductForm saveHandler={handleAddProduct} cancelHandler={handleFormClose}/>
            </div>
            }
        </div>
    )
}
;