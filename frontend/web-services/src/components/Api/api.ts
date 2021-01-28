import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {toast} from "react-toastify";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import {ShoppingListListDto} from "../../dto/ShoppingListListDto";
import {ShopDto} from "../../dto/ShopDto";
import {ShopListDto} from "../../dto/ShopListDto";
import {ProductDto} from "../../dto/ProductDto";
import {ProductListDto} from "../../dto/ProductListDto";

const requestDefaultConfig: AxiosRequestConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
};

export default class Api {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8081/v1/api/',
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
        return this.axiosInstance.post(`list/`, shoppingList, requestDefaultConfig);
    };

    getAllShoppingLists = (): Promise<AxiosResponse<ShoppingListListDto>> => {
        return this.axiosInstance.get(`list/`, requestDefaultConfig);
    };

    deleteShoppingList = (shoppingListId: string): Promise<AxiosResponse<void>> => {
        return this.axiosInstance.delete(`list/${shoppingListId}`, requestDefaultConfig);
    };

    saveShop = (shop: ShopDto): Promise<AxiosResponse<ShopDto>> => {
        return this.axiosInstance.post(`shop/`, shop, requestDefaultConfig);
    };

    getAllShops = (): Promise<AxiosResponse<ShopListDto>> => {
        return this.axiosInstance.get(`shop/`, requestDefaultConfig);
    };

    deleteShop = (shopId: string): Promise<AxiosResponse<void>> => {
        return this.axiosInstance.delete(`shop/${shopId}`, requestDefaultConfig);
    };

    saveProduct = (product: ProductDto): Promise<AxiosResponse<ProductDto>> => {
        return this.axiosInstance.post(`product/`, product, requestDefaultConfig);
    };

    getAllProducts = (): Promise<AxiosResponse<ProductListDto>> => {
        return this.axiosInstance.get(`product/`, requestDefaultConfig);
    };

    deleteProduct = (productId: string): Promise<AxiosResponse<void>> => {
        return this.axiosInstance.delete(`product/${productId}`, requestDefaultConfig);
    };
}