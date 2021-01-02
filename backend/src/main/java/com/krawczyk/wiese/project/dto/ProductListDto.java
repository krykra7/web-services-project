package com.krawczyk.wiese.project.dto;

import com.krawczyk.wiese.project.model.Product;
import com.krawczyk.wiese.project.model.Shop;

import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ProductListDto {

    public ProductListDto(List<Product> productList) {
        this.productDtoList = productList.stream().map(ProductDto::new).collect(Collectors.toList());
    }

    private List<ProductDto> productDtoList;

    public List<ProductDto> getProductDtoList() {
        return productDtoList;
    }

    public void setProductDtoList(List<ProductDto> productDtoList) {
        this.productDtoList = productDtoList;
    }
}
