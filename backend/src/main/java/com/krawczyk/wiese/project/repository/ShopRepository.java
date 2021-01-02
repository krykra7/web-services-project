package com.krawczyk.wiese.project.repository;

import com.krawczyk.wiese.project.model.Shop;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopRepository extends JpaRepository<Shop, Long> {
    void deleteById(Long id);
}
