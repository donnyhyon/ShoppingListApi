package com.example.shoppinglist.repositories;

import com.example.shoppinglist.model.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item,Long> {
}
