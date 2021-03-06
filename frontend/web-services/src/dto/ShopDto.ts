import {ShopIndustryDto} from "./ShopIndustryDto";
import {ShopProductDto} from "./ShopProductDto";

export type ShopDto = {
    [key: string]: any
    id: string;
    name: string;
    shopIndustryDtoList: ShopIndustryDto[];
    shopProductDtoList: ShopProductDto[];
}