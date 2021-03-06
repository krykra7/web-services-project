package com.krawczyk.wiese.project.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krawczyk.wiese.project.model.Shop;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShopListDto {

    private List<ShopDto> shopDtoList;

    @JsonIgnore
    public ShopListDto(List<Shop> shopList) {
        if (shopList != null) {
            this.shopDtoList = shopList.stream().map(ShopDto::new).collect(Collectors.toList());
        } else {
            this.shopDtoList = new ArrayList<>();
        }
    }

    public List<ShopDto> getShopDtoList() {
        return shopDtoList;
    }

    public void setShopDtoList(List<ShopDto> shopDtoList) {
        this.shopDtoList = shopDtoList;
    }
}
