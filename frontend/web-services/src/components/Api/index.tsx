import {createContext, ReactNode} from "react";
import Api from "./api";

const ApiContext = createContext(null);
const {Provider} = ApiContext;

const ApiProvider = (props: { children: ReactNode }) => {
    return <Provider value={new Api()}>{props.children}</Provider>
}

export default ApiProvider;

export {ApiContext};
