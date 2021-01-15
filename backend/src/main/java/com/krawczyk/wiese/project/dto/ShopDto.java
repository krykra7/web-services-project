package com.krawczyk.wiese.project.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krawczyk.wiese.project.model.Shop;
import com.krawczyk.wiese.project.model.ShopIndustry;
import com.krawczyk.wiese.project.model.ShopProduct;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShopDto {

    private Long id;
    private String name;
    private List<ShopIndustryDto> shopIndustryDtoList;
    private List<ShopProductDto> shopProductDtoList;

    @JsonIgnore
    public ShopDto(Shop shop) {
        this.id = shop.getId();
        this.name = shop.getName();
    }

    @JsonIgnore
    public Shop toShop() {
        Shop shop = new Shop();
        shop.setId(this.id);
        shop.setShopIndustryList(parseShopIndustryDtoList());
        shop.setShopProductList(parseShopProductDtoList());
        shop.setName(this.name);

        return shop;
    }

    @JsonIgnore
    private List<ShopIndustry> parseShopIndustryDtoList() {
        if (this.shopProductDtoList != null) {
            return this.shopIndustryDtoList.stream().map(ShopIndustryDto::toShopIndustry).collect(Collectors.toList());
        }

        return new ArrayList<>();
    }

    @JsonIgnore
    private List<ShopProduct> parseShopProductDtoList() {
        if (this.shopProductDtoList != null) {
            return this.shopProductDtoList.stream().map(ShopProductDto::toShopProduct).collect(Collectors.toList());
        }

        return new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ShopIndustryDto> getShopIndustryDtoList() {
        return shopIndustryDtoList;
    }

    public void setShopIndustryDtoList(List<ShopIndustryDto> shopIndustryDtoList) {
        this.shopIndustryDtoList = shopIndustryDtoList;
    }

    public List<ShopProductDto> getShopProductDtoList() {
        return shopProductDtoList;
    }

    public void setShopProductDtoList(List<ShopProductDto> shopProductDtoList) {
        this.shopProductDtoList = shopProductDtoList;
    }
}
