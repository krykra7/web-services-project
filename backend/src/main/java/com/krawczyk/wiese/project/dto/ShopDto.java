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
        this.shopIndustryDtoList = parseShopIndustryList(shop.getShopIndustryList());
        this.shopProductDtoList = parseShopProductList(shop.getShopProductList());
    }

    @JsonIgnore
    public Shop toShop() {
        Shop shop = new Shop();
        shop.setId(this.id);
        shop.setShopIndustryList(parseShopIndustryDtoList(shop));
        shop.setShopProductList(parseShopProductDtoList(shop));
        shop.setName(this.name);

        return shop;
    }

    @JsonIgnore
    private List<ShopIndustryDto> parseShopIndustryList(List<ShopIndustry> shopIndustryList) {
        if (shopIndustryList != null) {
            return shopIndustryList.stream().map(ShopIndustryDto::new).collect(Collectors.toList());
        }

        return new ArrayList<>();
    }

    @JsonIgnore
    private List<ShopProductDto> parseShopProductList(List<ShopProduct> shopProductList) {
        if (shopProductList != null) {
            return shopProductList.stream().map(ShopProductDto::new).collect(Collectors.toList());
        }

        return new ArrayList<>();
    }

    @JsonIgnore
    private List<ShopIndustry> parseShopIndustryDtoList(Shop shop) {
        if (this.shopIndustryDtoList != null) {
            return this.shopIndustryDtoList.stream().map(shopIndustryDto -> {
                return shopIndustryDto.toShopIndustry(shop);
            }).collect(Collectors.toList());
        }

        return new ArrayList<>();
    }

    @JsonIgnore
    private List<ShopProduct> parseShopProductDtoList(Shop shop) {
        if (this.shopProductDtoList != null) {
            return this.shopProductDtoList.stream().map((shopProductDto -> {
                return shopProductDto.toShopProduct(shop);
            })).collect(Collectors.toList());
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
