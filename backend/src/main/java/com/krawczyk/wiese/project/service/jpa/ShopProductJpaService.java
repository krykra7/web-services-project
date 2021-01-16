package com.krawczyk.wiese.project.service.jpa;

import com.krawczyk.wiese.project.dto.ShopProductDto;
import com.krawczyk.wiese.project.model.ShopProduct;
import com.krawczyk.wiese.project.repository.ShopProductRepository;
import com.krawczyk.wiese.project.service.ShopProductCrudService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShopProductJpaService implements ShopProductCrudService {

    private final ShopProductRepository shopProductRepository;

    public ShopProductJpaService(ShopProductRepository shopProductRepository) {
        this.shopProductRepository = shopProductRepository;
    }

    @Override
    public List<ShopProduct> findAll() {
        return shopProductRepository.findAll();
    }

    @Override
    public ShopProduct save(ShopProduct object) {
        return shopProductRepository.save(object);
    }

    @Override
    public void delete(Long id) {
        shopProductRepository.deleteById(id);
    }

    @Override
    public List<ShopProductDto> findShopProductByProductId(Long productId) {
        return shopProductRepository.findAllByProductId(productId).stream()
            .map(ShopProductDto::new)
            .collect(Collectors.toList());
    }

    @Override
    public List<ShopProductDto> findShopProductByShopId(Long shopId) {
        return shopProductRepository.findAllByShopId(shopId).stream()
            .map(ShopProductDto::new)
            .collect(Collectors.toList());
    }
}
