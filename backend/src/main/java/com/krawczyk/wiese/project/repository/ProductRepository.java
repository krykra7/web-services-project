package com.krawczyk.wiese.project.repository;

import com.krawczyk.wiese.project.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    void deleteById(Long id);
}
