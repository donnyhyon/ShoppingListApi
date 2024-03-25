package com.example.shoppinglist.repository;

import com.example.shoppinglist.hexagonal.domain.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Long, Recipe> {
}
