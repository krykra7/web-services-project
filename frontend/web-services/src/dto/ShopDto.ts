import {ShopIndustryDto} from "./ShopIndustryDto";
import {ShopProductDto} from "./ShopProductDto";

export type ShopDto = {
    id: string;
    name: string;
    shopIndustryDtoList: ShopIndustryDto[];
    shopProductDtoList: ShopProductDto[];
}