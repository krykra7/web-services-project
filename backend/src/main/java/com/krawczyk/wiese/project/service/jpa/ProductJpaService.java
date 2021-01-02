package com.krawczyk.wiese.project.service.jpa;

import com.krawczyk.wiese.project.model.Product;
import com.krawczyk.wiese.project.repository.ProductRepository;
import com.krawczyk.wiese.project.service.ProductCrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductJpaService implements ProductCrudService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductJpaService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product save(Product object) {
        return productRepository.save(object);
    }

    @Override
    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
