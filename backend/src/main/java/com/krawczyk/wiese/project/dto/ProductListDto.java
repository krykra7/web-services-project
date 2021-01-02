package com.krawczyk.wiese.project.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krawczyk.wiese.project.model.Product;

import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ProductListDto {

    private List<ProductDto> productDtoList;

    @JsonIgnore
    public ProductListDto(List<Product> productList) {
        this.productDtoList = productList.stream().map(ProductDto::new).collect(Collectors.toList());
    }

    public List<ProductDto> getProductDtoList() {
        return productDtoList;
    }

    public void setProductDtoList(List<ProductDto> productDtoList) {
        this.productDtoList = productDtoList;
    }
}
