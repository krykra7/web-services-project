import React, {useContext, useEffect, useState} from "react";
import {ShoppingListCard} from "./index";
import {Grid, makeStyles, Theme} from "@material-ui/core";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import {ShoppingListListDto} from "../../dto/ShoppingListListDto";
import Api from "../Api/api";
import {ApiContext} from "../Api";
import {toast} from "react-toastify";

const useStyles = makeStyles((theme: Theme) => ({
    emptyCard: {
        width: theme.spacing(60),
        paddingBottom: theme.spacing(2),
    }
}))

export default function ShoppingListGrid() {
    const classes = useStyles();
    const [shoppingList, setShoppingList] = useState<ShoppingListDto[]>([] as ShoppingListDto[]);
    const api = useContext<Api>(ApiContext);

    useEffect(() => {
        api.getAllShoppingLists().then((resp) => {
            setShoppingList(resp.data.shoppingListDtoList);
            toast.success("Pobrano listy zakupów")
        }).catch(() => {
        })
    }, [])

    const handleSaveNewList = (shoppingListData: ShoppingListDto): void => {
        shoppingListData.productDtoList = shoppingListData.product  DtoList.map((productDto) => {
            if (productDto.id.substring(0, 3) === 'new') {
                return {...productDto, id: null};
            } else {
                return {...productDto};
            }
        })

        api.saveShoppingList(shoppingListData).then((resp) => {
            let newShoppingList = [...shoppingList];
            newShoppingList.push(resp.data);
            setShoppingList(newShoppingList);
            toast.success("Dodane listę zakupów");
        }).catch(() => {
        })
    };

    const handleDeleteList = (shoppingListId: string): void => {
        api.deleteShoppingList(shoppingListId).then(() => {
            toast.success("Usunięto listę zakupów")
            let newShoppingList = shoppingList.filter((list) => {
                return list.id !== shoppingListId;
            });
            setShoppingList(newShoppingList);
        }).catch(() => {
        });
    }

    return (
        <>
            <div className={classes.emptyCard}>
                <ShoppingListCard saveCardHandler={handleSaveNewList}/>
            </div>
            <div>
                <Grid container spacing={3}>
                    {shoppingList.map((shoppingListData: ShoppingListDto, index: number) => {
                        let xs: any = 4;
                        console.log(shoppingList.length);
                        if (shoppingList.length < 3) {
                            if (shoppingList.length < 2) {
                                xs = 12;
                            } else {
                                xs = 6;
                            }
                        }

                        return (
                            <Grid key={index} item xs={xs}>
                                <ShoppingListCard
                                    deleteCardHandler={handleDeleteList}
                                    saveCardHandler={handleSaveNewList}
                                    shoppingListData={shoppingListData}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}