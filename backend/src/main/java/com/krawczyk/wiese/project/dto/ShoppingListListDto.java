package com.krawczyk.wiese.project.dto;

import com.krawczyk.wiese.project.model.ShoppingList;

import java.util.List;
import java.util.stream.Collectors;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ShoppingListListDto {

    public ShoppingListListDto(List<ShoppingList> shoppingListList) {
        this.shoppingListDtoList = shoppingListList.stream().map(ShoppingListDto::new).collect(Collectors.toList());
    }

    private List<ShoppingListDto> shoppingListDtoList;

    public List<ShoppingListDto> getShoppingListDtoList() {
        return shoppingListDtoList;
    }

    public void setShoppingListDtoList(List<ShoppingListDto> shoppingListDtoList) {
        this.shoppingListDtoList = shoppingListDtoList;
    }
}
