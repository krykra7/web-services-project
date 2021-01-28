import {ShopProductDto} from "./ShopProductDto";

export type ProductDto = {
    [key: string]: any;
    id?: string;
    name?: string;
    protein?: string;
    carbs?: string;
    fats?: string;
    calories?: string;
    size?: string;
    type?: string;
    shopProductDtoList?: ShopProductDto[];
}