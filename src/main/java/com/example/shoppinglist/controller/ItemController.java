package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/shoppinglist")
public class ItemController {
    private final ItemRepository itemRepository;

    public ItemController(final ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping()
    public Iterable<Item> getItems() {
        return this.itemRepository.findAll();

    }

    @PostMapping()
    public Item addItem(Item item) {
        this.itemRepository.save(item);
        return item;
    }
}
