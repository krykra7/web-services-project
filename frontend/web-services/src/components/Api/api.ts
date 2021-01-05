import axios, {AxiosInstance, AxiosResponse} from "axios";
import {toast} from "react-toastify";
import {ShoppingListDto} from "../../dto/ShoppingListDto";
import {ShoppingListListDto} from "../../dto/ShoppingListListDto";
import {ShopDto} from "../../dto/ShopDto";
import {ShopListDto} from "../../dto/ShopListDto";
import {ProductDto} from "../../dto/ProductDto";
import {ProductListDto} from "../../dto/ProductListDto";

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

    saveShop = (shop: ShopDto): Promise<AxiosResponse<ShopDto>> => {
        return this.axiosInstance.post(`shop`, shop);
    };

    getAllShops = (): Promise<AxiosResponse<ShopListDto>> => {
        return this.axiosInstance.get(`shop`);
    };

    deleteShop = (shopId: string): Promise<AxiosResponse<void>> => {
        return this.axiosInstance.delete(`shop/${shopId}`);
    };

    saveProduct = (product: ProductDto): Promise<AxiosResponse<ProductDto>> => {
        return this.axiosInstance.post(`product`, product);
    };

    getAllProducts = (): Promise<AxiosResponse<ProductListDto>> => {
        return this.axiosInstance.get(`product`);
    };

    deleteProduct = (productId: string): Promise<AxiosResponse<void>> => {
        return this.axiosInstance.delete(`product/${productId}`);
    };
}