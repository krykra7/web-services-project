package com.krawczyk.wiese.project.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.krawczyk.wiese.project.model.ShoppingList;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShoppingListListDto {

    private List<ShoppingListDto> shoppingListDtoList;

    @JsonIgnore
    public ShoppingListListDto(List<ShoppingList> shoppingListList) {
        if (shoppingListList != null) {
            this.shoppingListDtoList = shoppingListList.stream().map(ShoppingListDto::new).collect(Collectors.toList());
        } else {
            this.shoppingListDtoList = new ArrayList<>();
        }
    }

    public List<ShoppingListDto> getShoppingListDtoList() {
        return shoppingListDtoList;
    }

    public void setShoppingListDtoList(List<ShoppingListDto> shoppingListDtoList) {
        this.shoppingListDtoList = shoppingListDtoList;
    }
}
