package com.krawczyk.wiese.project.controller;

import com.krawczyk.wiese.project.dto.ShopProductDto;
import com.krawczyk.wiese.project.service.ShopProductCrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/api/shop-product")
@CrossOrigin(origins = "*")
public class ShopProductController {

    private final ShopProductCrudService shopProductService;

    @Autowired
    public ShopProductController(ShopProductCrudService shopProductService) {
        this.shopProductService = shopProductService;
    }

    @GetMapping("/")
    public ResponseEntity<List<ShopProductDto>> findAllShopProduct() {
        return ResponseEntity.ok(shopProductService.findAll().stream()
            .map(ShopProductDto::new)
            .collect(Collectors.toList())
        );
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<ShopProductDto>> findShopProductByProductId(@PathVariable Long productId) {
        return ResponseEntity.ok(shopProductService.findShopProductByProductId(productId));
    }

    @GetMapping("/shop/{shopId}")
    public ResponseEntity<List<ShopProductDto>> findShopProductByShopId(@PathVariable Long shopId) {
        return ResponseEntity.ok(shopProductService.findShopProductByShopId(shopId));
    }

    @PostMapping("/")
    public ResponseEntity<ShopProductDto> saveShopProduct(@RequestBody ShopProductDto shopProductDto) {
        return ResponseEntity.ok(new ShopProductDto(shopProductService.save(shopProductDto.toShopProduct())));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShopProduct(@PathVariable Long id) {
        shopProductService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
