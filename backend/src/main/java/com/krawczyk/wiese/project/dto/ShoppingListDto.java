package com.krawczyk.wiese.project.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krawczyk.wiese.project.model.Product;
import com.krawczyk.wiese.project.model.ShoppingList;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShoppingListDto {

    private Long id;
    private String title;
    private String note;
    private Date date;
    private List<ProductDto> productDtoList;

    @JsonIgnore
    public ShoppingListDto(ShoppingList shoppingList) {
        this.id = shoppingList.getId();
        this.title = shoppingList.getTitle();
        this.note = shoppingList.getNote();
        this.date = shoppingList.getDate();
        this.productDtoList = parseProductList(shoppingList.getProducts());
    }

    @JsonIgnore
    public ShoppingList toShoppingList() {
        ShoppingList shoppingList = new ShoppingList();
        shoppingList.setId(this.id);
        shoppingList.setTitle(this.title);
        shoppingList.setNote(this.note);
        shoppingList.setDate(this.date);
        shoppingList.setProducts(parseProductDtoList());

        return shoppingList;
    }

    @JsonIgnore
    private List<ProductDto> parseProductList(List<Product> productList) {
        return productList.stream().map(ProductDto::new).collect(Collectors.toList());
    }

    @JsonIgnore
    private List<Product> parseProductDtoList() {
        return productDtoList.stream().map(ProductDto::toProduct).collect(Collectors.toList());
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<ProductDto> getProductDtoList() {
        return productDtoList;
    }

    public void setProductDtoList(List<ProductDto> productDtoList) {
        this.productDtoList = productDtoList;
    }
}
