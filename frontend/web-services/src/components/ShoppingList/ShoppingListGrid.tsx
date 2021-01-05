import React, {useEffect, useState} from "react";
import {ShoppingListCard} from "./index";
import {Grid, makeStyles, Theme} from "@material-ui/core";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import {ShoppingListListDto} from "../../dto/ShoppingListListDto";

const useStyles = makeStyles((theme: Theme) => ({
    emptyCard: {
        width: theme.spacing(60),
        paddingBottom: theme.spacing(2),
    }
}))

type Props = {
    shoppingListList: ShoppingListListDto;
}

export default function ShoppingListGrid(props: Props) {
    const classes = useStyles();
    const [shoppingList, setShoppingList] = useState<ShoppingListDto[]>([] as ShoppingListDto[]);

    useEffect(() => {
        if (props.shoppingListList && props.shoppingListList.shoppingListDtoList) {
            setShoppingList(props.shoppingListList.shoppingListDtoList);
        } else {
            setShoppingList([] as ShoppingListDto[])
        }
    }, [props.shoppingListList])

    const handleSaveNewList = (shoppingListData: ShoppingListDto): void => {
        let newShoppingList = [...shoppingList];
        newShoppingList.push(shoppingListData);
        setShoppingList(newShoppingList);
    };

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
                            }else{
                                xs = 6;
                            }
                        }

                        return (
                            <Grid key={index} item xs={xs}>
                                <ShoppingListCard
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