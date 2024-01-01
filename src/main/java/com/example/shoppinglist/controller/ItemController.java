package com.example.shoppinglist.controller;

import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    private final ItemRepository itemRepository;

    public ItemController(final ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
}
