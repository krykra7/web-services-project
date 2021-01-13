package com.krawczyk.wiese.project;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationConfig;
import com.fasterxml.jackson.databind.jsonschema.JsonSchema;
import com.krawczyk.wiese.project.dto.ProductDto;
import com.krawczyk.wiese.project.dto.ShopDto;
import com.krawczyk.wiese.project.dto.ShopIndustryDto;
import com.krawczyk.wiese.project.dto.ShopProductDto;
import com.krawczyk.wiese.project.dto.ShoppingListDto;
import com.krawczyk.wiese.project.model.Product;
import com.krawczyk.wiese.project.model.ShopProduct;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;

@SpringBootApplication
public class ProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectApplication.class, args);
    }
}
