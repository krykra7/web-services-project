import {ProductDto} from "./ProductDto";

export type ShoppingListDto = {
    [key: string]: any;
    id?: string;
    title?: string;
    note?: string;
    date?: string;
    productDtoList?: ProductDto[];
}