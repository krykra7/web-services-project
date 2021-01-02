package com.krawczyk.wiese.project.controller;

import com.krawczyk.wiese.project.dto.ProductDto;
import com.krawczyk.wiese.project.dto.ProductListDto;
import com.krawczyk.wiese.project.service.ProductCrudService;

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
@RequestMapping("/v1/api/product")
@CrossOrigin(value = "*")
public class ProductController {

    private final ProductCrudService productService;

    @Autowired
    public ProductController(ProductCrudService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public ResponseEntity<ProductListDto> findAllProducts() {
        return ResponseEntity.ok(new ProductListDto(productService.findAll()));
    }

    @PostMapping("/")
    public ResponseEntity<ProductDto> saveProduct(@RequestBody ProductDto productDto) {
        return ResponseEntity.ok(new ProductDto(productService.save(productDto.toProduct())));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/")
    public ResponseEntity<ProductDto> editProduct(@RequestBody ProductDto productDto) {
        return ResponseEntity.ok(new ProductDto(productService.save(productDto.toProduct())));
    }

    @ExceptionHandler(Exception.class)
    private ResponseEntity<String> handleErrors(Exception e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
