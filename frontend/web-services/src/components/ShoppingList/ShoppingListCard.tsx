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
    readOnly: "readonly"
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
} | {
    type: 'cleanState',
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
        case "cleanState":
            return {mode: modes.empty, shoppingListData: {productDtoList: [] as ProductDto[]} as ShoppingListDto}
    }
}

function getDefaultState(shoppingLitData: ShoppingListDto): State {
    if (shoppingLitData) {
        return {mode: modes.readOnly, shoppingListData: shoppingLitData};
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
        dispatchAction({type: 'cleanState'});
    };

    const handleSave = () => {
        props.saveCardHandler(state.shoppingListData);
        dispatchAction({type: 'cleanState'});
    };

    const handleDelete = () => {
        props.deleteCardHandler(state.shoppingListData.id);
    }

    return (
        <div>
            <Card elevation={3} variant={"outlined"}>
                <ShoppingListCardTitle
                    mode={state.mode}
                    titleChangeHandler={handleTitleChange}
                    title={state.shoppingListData.title}
                    focusedChangeHandler={handleModeChange}/>
                <Divider/>
                {state.mode !== modes.empty && <CardContent>
                    <ShoppingListCardContent
                        mode={state.mode}
                        changeProductHandler={handleProductChange}
                        addProductHandler={handleAddProductToList}
                        productList={state.shoppingListData.productDtoList}/>
                </CardContent>}
                <Divider/>
                {state.mode !== modes.empty && <CardActions>
                    <ShoppingListCardFooter
                        mode={state.mode}
                        cancelHandler={handleCancel}
                        saveHandler={handleSave}
                        deleteHandler={handleDelete}
                    />
                </CardActions>}
            </Card>
        </div>
    )
}