package com.krawczyk.wiese.project.controller;

import com.krawczyk.wiese.project.dto.ShopDto;
import com.krawczyk.wiese.project.dto.ShopListDto;
import com.krawczyk.wiese.project.service.ShopCrudService;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/v1/api/shop")
@CrossOrigin(value = "*")
public class ShopController {

    private final ShopCrudService shopService;

    @Autowired
    public ShopController(ShopCrudService shopService) {
        this.shopService = shopService;
    }

    @GetMapping("/")
    public ResponseEntity<ShopListDto> findAllShops() {
        return ResponseEntity.ok(new ShopListDto(shopService.findAll()));
    }

    @PostMapping("/")
    public ResponseEntity<ShopDto> saveShop(@RequestBody ShopDto shopDto) {
        return ResponseEntity.ok(new ShopDto(shopService.save(shopDto.toShop())));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShop(@PathVariable Long id) {
        shopService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/")
    public ResponseEntity<ShopDto> editShop(@RequestBody ShopDto shopDto) {
        return ResponseEntity.ok(new ShopDto(shopService.save(shopDto.toShop())));
    }

    @ExceptionHandler(Exception.class)
    private ResponseEntity<String> handleErrors(Exception e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
