package com.krawczyk.wiese.project.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krawczyk.wiese.project.model.Product;
import com.krawczyk.wiese.project.model.ShopProduct;

import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ProductDto {

    private long id;
    private String name;
    private String protein;
    private String carbs;
    private String fats;
    private String calories;
    private String size;
    private String type;
    private List<ShopProductDto> shopProductDtoList;

    @JsonIgnore
    public ProductDto(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.protein = product.getProtein();
        this.carbs = product.getCarbs();
        this.fats = product.getFats();
        this.calories = product.getCalories();
        this.size = product.getSize();
        this.type = product.getType();
        this.shopProductDtoList = parseShopProductList(product.getShopProductList());
    }

    @JsonIgnore
    public Product toProduct() {
        Product product = new Product();
        product.setId(this.id);
        product.setName(this.name);
        product.setProtein(this.protein);
        product.setCarbs(this.carbs);
        product.setFats(this.fats);
        product.setCalories(this.calories);
        product.setSize(this.size);
        product.setType(this.type);
        product.setShopProductList(parseShopProductDtoList());

        return product;
    }

    @JsonIgnore
    private List<ShopProductDto> parseShopProductList(List<ShopProduct> shopProductList) {
        return shopProductList.stream().map(ShopProductDto::new).collect(Collectors.toList());
    }

    @JsonIgnore
    private List<ShopProduct> parseShopProductDtoList() {
        return this.shopProductDtoList.stream().map(ShopProductDto::toShopProduct).collect(Collectors.toList());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProtein() {
        return protein;
    }

    public void setProtein(String protein) {
        this.protein = protein;
    }

    public String getCarbs() {
        return carbs;
    }

    public void setCarbs(String carbs) {
        this.carbs = carbs;
    }

    public String getFats() {
        return fats;
    }

    public void setFats(String fats) {
        this.fats = fats;
    }

    public String getCalories() {
        return calories;
    }

    public void setCalories(String calories) {
        this.calories = calories;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<ShopProductDto> getShopProductDtoList() {
        return shopProductDtoList;
    }

    public void setShopProductDtoList(List<ShopProductDto> shopProductDtoList) {
        this.shopProductDtoList = shopProductDtoList;
    }
}
