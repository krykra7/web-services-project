package com.krawczyk.wiese.project.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Shop {

    @Id
    @Column(name = "shop_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ShopProduct> shopProductList;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ShopIndustry> shopIndustryList;

    private String name;

    public List<ShopProduct> getShopProductList() {
        return shopProductList;
    }

    public void setShopProductList(List<ShopProduct> shopProductList) {
        this.shopProductList = shopProductList;
    }

    public List<ShopIndustry> getShopIndustryList() {
        return shopIndustryList;
    }

    public void setShopIndustryList(List<ShopIndustry> shopIndustryList) {
        this.shopIndustryList = shopIndustryList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
