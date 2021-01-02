package com.krawczyk.wiese.project.service.jpa;

import com.krawczyk.wiese.project.model.Shop;
import com.krawczyk.wiese.project.repository.ShopRepository;
import com.krawczyk.wiese.project.service.ShopCrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopJpaService implements ShopCrudService {

    private final ShopRepository shopRepository;

    @Autowired
    public ShopJpaService(ShopRepository shopRepository) {
        this.shopRepository = shopRepository;
    }

    @Override
    public List<Shop> findAll() {
        return shopRepository.findAll();
    }

    @Override
    public Shop save(Shop object) {
        return shopRepository.save(object);
    }

    @Override
    public void delete(Long id) {
        shopRepository.deleteById(id);
    }
}
