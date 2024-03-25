package com.example.shoppinglist.hexagonal.adapters;

import com.example.shoppinglist.hexagonal.domain.Recipe;
import com.example.shoppinglist.hexagonal.ports.RecipePort;

import java.util.Optional;

public class RecipeAdapter implements RecipePort {

    @Override
    public Optional<Recipe> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void save(Recipe recipe) {

    }
}
