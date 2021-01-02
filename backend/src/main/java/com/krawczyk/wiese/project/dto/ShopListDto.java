package com.krawczyk.wiese.project.dto;

import com.krawczyk.wiese.project.model.Shop;

import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShopListDto {

    public ShopListDto(List<Shop> shopList) {
        this.shopDtoList = shopList.stream().map(ShopDto::new).collect(Collectors.toList());
    }

    private List<ShopDto> shopDtoList;

    public List<ShopDto> getShopDtoList() {
        return shopDtoList;
    }

    public void setShopDtoList(List<ShopDto> shopDtoList) {
        this.shopDtoList = shopDtoList;
    }
}
