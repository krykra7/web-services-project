import React, {useReducer} from "react";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import ShoppingListCardTitle from "./ShoppingListCardTitle";
import {Card, CardActions, CardContent, Divider} from "@material-ui/core";
import ShoppingListCardContent from "./ShoppingListCardContent";
import ShoppingListCardFooter from "./ShoppingListCardFooter";

const modes = {
    empty: "empty",
    edit: "edit",
}

type State = {
    mode: string;
    shoppingListData?: ShoppingListDto
}

type ShoppingCardAction = | {
    type: 'setMode',
    payload: string,
} | {
    type: 'setTitle',
    payload: string,
}

const shoppingCardReducer = (state: State, action: ShoppingCardAction) => {
    switch (action.type) {
        case "setMode":
            return {...state, mode: action.payload};
        case "setTitle":
            state.shoppingListData['title'] = action.payload;
            return {...state, shoppingListData: state.shoppingListData}
    }
}

function getDefaultState(shoppingLitData: ShoppingListDto): State {
    if (shoppingLitData) {
        return {mode: modes.edit, shoppingListData: shoppingLitData};
    } else {
        return {mode: modes.empty, shoppingListData: {} as ShoppingListDto};
    }
}

export default function ShoppingListCard(props: { shoppingListData?: ShoppingListDto }) {
    const [state, dispatchAction] = useReducer(shoppingCardReducer, getDefaultState(props.shoppingListData));

    const handleTitleChange = (title: string) => {
        dispatchAction({type: 'setTitle', payload: title});
    }

    const handleModeChange = (mode: string) => {
        dispatchAction({type: 'setMode', payload: mode});
    }

    return (
        <div>
            <Card elevation={3} variant={"outlined"}>
                <ShoppingListCardTitle
                    titleChangeHandler={handleTitleChange}
                    title={state.shoppingListData.title}
                    focusedChangeHandler={handleModeChange}/>
                <Divider/>
                {state.mode === modes.edit && <CardContent>
                    <ShoppingListCardContent/>
                </CardContent>}
                <Divider/>
                {state.mode === modes.edit && <CardActions>
                    <ShoppingListCardFooter/>
                </CardActions>}
            </Card>
        </div>
    )
}