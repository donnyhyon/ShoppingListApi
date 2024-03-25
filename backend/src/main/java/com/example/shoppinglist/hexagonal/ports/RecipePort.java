package com.example.shoppinglist.hexagonal.ports;

import com.example.shoppinglist.hexagonal.domain.Recipe;

import java.util.Optional;

public interface RecipePort {
    Optional<Recipe> findById(Long id);

    void save(Recipe recipe);
}
