package com.krawczyk.wiese.project.service.jpa;

import com.krawczyk.wiese.project.model.ShoppingList;
import com.krawczyk.wiese.project.repository.ShoppingListRepository;
import com.krawczyk.wiese.project.service.ShoppingListCrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingListJpaService implements ShoppingListCrudService {

    private final ShoppingListRepository shoppingListRepository;

    @Autowired
    public ShoppingListJpaService(ShoppingListRepository shoppingListRepository) {
        this.shoppingListRepository = shoppingListRepository;
    }

    @Override
    public List<ShoppingList> findAll() {
        return shoppingListRepository.findAll();
    }

    @Override
    public ShoppingList save(ShoppingList object) {
        return shoppingListRepository.save(object);
    }

    @Override
    public void delete(Long id) {
        shoppingListRepository.deleteById(id);
    }
}
