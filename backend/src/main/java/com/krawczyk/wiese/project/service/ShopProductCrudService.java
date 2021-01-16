package com.krawczyk.wiese.project.service;

import com.krawczyk.wiese.project.dto.ShopProductDto;
import com.krawczyk.wiese.project.model.ShopProduct;

import java.util.List;

public interface ShopProductCrudService extends CrudService<ShopProduct, Long> {

    List<ShopProductDto> findShopProductByProductId(Long productId);

    List<ShopProductDto> findShopProductByShopId(Long shopId);
}
