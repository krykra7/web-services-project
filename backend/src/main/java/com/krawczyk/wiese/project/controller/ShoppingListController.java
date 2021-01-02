package com.krawczyk.wiese.project.controller;

import com.krawczyk.wiese.project.dto.ShopDto;
import com.krawczyk.wiese.project.dto.ShopListDto;
import com.krawczyk.wiese.project.dto.ShoppingListDto;
import com.krawczyk.wiese.project.dto.ShoppingListListDto;
import com.krawczyk.wiese.project.service.ShoppingListCrudService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/list")
@CrossOrigin(value = "*")
public class ShoppingListController {

    private final ShoppingListCrudService shoppingListService;

    public ShoppingListController(ShoppingListCrudService shoppingListService) {
        this.shoppingListService = shoppingListService;
    }

    @GetMapping("/")
    public ResponseEntity<ShoppingListListDto> findAllShoppingLists() {
        return ResponseEntity.ok(new ShoppingListListDto(shoppingListService.findAll()));
    }

    @PostMapping("/")
    public ResponseEntity<ShoppingListDto> saveShop(@RequestBody ShoppingListDto shoppingListDto) {
        return ResponseEntity.ok(new ShoppingListDto(shoppingListService.save(shoppingListDto.toShoppingList())));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShop(@PathVariable Long id) {
        shoppingListService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/")
    public ResponseEntity<ShoppingListDto> editShop(@RequestBody ShoppingListDto shoppingListDto) {
        return ResponseEntity.ok(new ShoppingListDto(shoppingListService.save(shoppingListDto.toShoppingList())));
    }

    @ExceptionHandler(Exception.class)
    private ResponseEntity<String> handleErrors(Exception e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
