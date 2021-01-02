package com.krawczyk.wiese.project.repository;

import com.krawczyk.wiese.project.model.ShoppingList;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingListRepository extends JpaRepository<ShoppingList, Long> {
    void deleteById(Long id);
}
