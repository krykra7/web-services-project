package com.krawczyk.wiese.project.dto;

import com.krawczyk.wiese.project.model.Product;
import com.krawczyk.wiese.project.model.Shop;
import com.krawczyk.wiese.project.model.ShopProduct;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShopProductDto {

    private Long id;
    private Long shopId;
    private Long productId;
    private String price;

    public ShopProductDto(ShopProduct shopProduct) {
        this.id = shopProduct.getId();
        this.shopId = shopProduct.getShop().getId();
        this.productId = shopProduct.getProduct().getId();
        this.price = shopProduct.getPrice();
    }

    public ShopProduct toShopProduct() {
        ShopProduct shopProduct = new ShopProduct();
        shopProduct.setId(this.id);
        shopProduct.setShop(new Shop(this.shopId));
        shopProduct.setProduct(new Product(this.productId));
        shopProduct.setPrice(this.price);

        return shopProduct;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
