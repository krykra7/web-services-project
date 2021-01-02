package com.krawczyk.wiese.project.dto;

import com.krawczyk.wiese.project.model.Industry;
import com.krawczyk.wiese.project.model.Shop;
import com.krawczyk.wiese.project.model.ShopIndustry;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShopIndustryDto {

    private Long id;
    private Long industryId;
    private Long shopId;
    private String name;

    public ShopIndustryDto(ShopIndustry shopIndustry) {
        this.id = shopIndustry.getId();
        this.shopId = shopIndustry.getShop().getId();
        this.industryId = shopIndustry.getIndustry().getId();
        this.name = shopIndustry.getIndustry().getName();
    }

    public ShopIndustry toShopIndustry() {
        ShopIndustry shopIndustry = new ShopIndustry();
        shopIndustry.setIndustry(new Industry(this.industryId, this.name));
        shopIndustry.setShop(new Shop(this.shopId));
        shopIndustry.setId(this.id);

        return shopIndustry;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIndustryId() {
        return industryId;
    }

    public void setIndustryId(Long industryId) {
        this.industryId = industryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
