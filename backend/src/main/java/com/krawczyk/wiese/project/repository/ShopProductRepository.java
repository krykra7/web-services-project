package com.krawczyk.wiese.project.repository;

import com.krawczyk.wiese.project.model.ShopProduct;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShopProductRepository extends JpaRepository<ShopProduct, Long> {

    List<ShopProduct> findAllByProductId(Long productId);

    List<ShopProduct> findAllByShopId(Long shopId);

    void deleteById(Long id);
}
