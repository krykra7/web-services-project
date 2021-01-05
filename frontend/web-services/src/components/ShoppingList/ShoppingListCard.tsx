import React, {useReducer} from "react";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import ShoppingListCardTitle from "./ShoppingListCardTitle";
import {Card, CardActions, CardContent, Divider} from "@material-ui/core";
import ShoppingListCardContent from "./ShoppingListCardContent";
import ShoppingListCardFooter from "./ShoppingListCardFooter";
import {ProductDto} from "../../dto/ProductDto";

const modes = {
    empty: "empty",
    edit: "edit",
}

type State = {
    mode: string;
    shoppingListData?: ShoppingListDto
}

type Props = {
    saveCardHandler: (shoppingListData: ShoppingListDto) => void;
    deleteCardHandler?: (id: string) => void;
    shoppingListData?: ShoppingListDto
}

type ShoppingCardAction = | {
    type: 'setMode',
    payload: string,
} | {
    type: 'setTitle',
    payload: string,
} | {
    type: 'addProduct',
    payload: ProductDto,
} | {
    type: 'changeProduct',
    payload: {
        index: number,
        propName: string,
        value: string,
    }
}

const shoppingCardReducer = (state: State, action: ShoppingCardAction) => {
    switch (action.type) {
        case "setMode":
            return {...state, mode: action.payload};
        case "setTitle":
            state.shoppingListData['title'] = action.payload;
            return {...state, shoppingListData: state.shoppingListData};
        case "addProduct":
            state.shoppingListData.productDtoList.push(action.payload);
            return {...state, shoppingListData: state.shoppingListData};
        case "changeProduct":
            let newProductList = [
                ...state.shoppingListData.productDtoList.slice(0, action.payload.index),
                {
                    ...state.shoppingListData.productDtoList[action.payload.index],
                    [action.payload.propName]: action.payload.value
                },
                ...state.shoppingListData.productDtoList.slice(++action.payload.index)];
            state.shoppingListData.productDtoList = newProductList;
            return {...state, shoppingListData: state.shoppingListData};
    }
}

function getDefaultState(shoppingLitData: ShoppingListDto): State {
    if (shoppingLitData) {
        return {mode: modes.edit, shoppingListData: shoppingLitData};
    } else {
        return {mode: modes.empty, shoppingListData: {productDtoList: [] as ProductDto[]} as ShoppingListDto};
    }
}

export default function ShoppingListCard(props: Props) {
    const [state, dispatchAction] = useReducer(shoppingCardReducer, getDefaultState(props.shoppingListData));

    const handleTitleChange = (title: string) => {
        dispatchAction({type: 'setTitle', payload: title});
    };

    const handleModeChange = (mode: string) => {
        dispatchAction({type: 'setMode', payload: mode});
    };

    const handleAddProductToList = (productDto: ProductDto) => {
        dispatchAction({type: 'addProduct', payload: productDto});
    };

    const handleProductChange = (index: number, propName: string, value: string) => {
        dispatchAction({type: 'changeProduct', payload: {index: index, propName: propName, value: value}});
    }

    const handleCancel = () => {

    };

    const handleSave = () => {
        props.saveCardHandler(state.shoppingListData);
    };

    return (
        <div>
            <Card elevation={3} variant={"outlined"}>
                <ShoppingListCardTitle
                    titleChangeHandler={handleTitleChange}
                    title={state.shoppingListData.title}
                    focusedChangeHandler={handleModeChange}/>
                <Divider/>
                {state.mode === modes.edit && <CardContent>
                    <ShoppingListCardContent
                        changeProductHandler={handleProductChange}
                        addProductHandler={handleAddProductToList}
                        productList={state.shoppingListData.productDtoList}/>
                </CardContent>}
                <Divider/>
                {state.mode === modes.edit && <CardActions>
                    <ShoppingListCardFooter cancelHandler={handleCancel} saveHandler={handleSave}/>
                </CardActions>}
            </Card>
        </div>
    )
}