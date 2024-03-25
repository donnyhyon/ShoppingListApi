package com.example.shoppinglist.hexagonal.domain;

import com.example.shoppinglist.model.Item;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "RECIPES")
@Getter
@Setter
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "INGREDIENTS")
    private List<Item> ingredients;
    @Column(name = "PORTION SIZE")
    private Integer portionSize;
    @Column(name = "COOKING METHOD")
    private List<String> cookingMethod;

    public Recipe(Long id, String name, List<Item> ingredients, Integer portionSize, List<String> cookingMethod){
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.portionSize = portionSize;
        this.cookingMethod = cookingMethod;
    }

}
