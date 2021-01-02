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

import java.io.IOException;

@SpringBootApplication
public class ProjectApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ProjectApplication.class, args);
    }

    private static String getJsonSchema(Class clazz) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        //There are other configuration options you can set.  This is the one I needed.

        JsonSchema schema = mapper.generateJsonSchema(clazz);

        return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(schema);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("ShopProductDto: ");
        System.out.println(getJsonSchema(ShopProductDto.class));
        System.out.println("ShopIndustryDto: ");
        System.out.println(getJsonSchema(ShopIndustryDto.class));
        System.out.println("ProductDto: ");
        System.out.println(getJsonSchema(ProductDto.class));
        System.out.println("ShopDto: ");
        System.out.println(getJsonSchema(ShopDto.class));
        System.out.println("ShoppingListDto: ");
        System.out.println(getJsonSchema(ShoppingListDto.class));
    }
}
