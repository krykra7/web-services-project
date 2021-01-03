import axios, {AxiosInstance, AxiosResponse} from "axios";
import {toast} from "react-toastify";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import {promises} from "dns";
import {ShoppingListListDto} from "../../dto/ShoppingListListDto";

export default class Api {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8080/v1/api/',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            }
        });

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error => {
                if (error.response) {
                    if (error.response.status === 400) {
                        toast.error("Wystątpił błąd");
                    }
                }
            }));
    };

    saveShoppingList = (shoppingList: ShoppingListDto): Promise<AxiosResponse<ShoppingListDto>> => {
        return this.axiosInstance.post(`list`, shoppingList);
    };

    getAllShoppingLists = (): Promise<AxiosResponse<ShoppingListListDto>> => {
        return this.axiosInstance.get(`list`);
    };

    deleteShoppingList = (shoppingListId: string): Promise<AxiosResponse<void>> => {
        return this.axiosInstance.delete(`list/${shoppingListId}`);
    };
}