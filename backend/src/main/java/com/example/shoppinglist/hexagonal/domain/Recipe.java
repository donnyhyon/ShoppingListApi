package com.example.shoppinglist.hexagonal.domain;

import com.example.shoppinglist.model.Item;

import java.util.List;

public class Recipe {
    private Long id;
    private String name;
    private List<Item> ingredients;
    private Integer portionSize;
    private List<String> cookingMethod;

    public Recipe(Long id, String name, List<Item> ingredients, Integer portionSize, List<String> cookingMethod){
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.portionSize = portionSize;
        this.cookingMethod = cookingMethod;
    }

}
