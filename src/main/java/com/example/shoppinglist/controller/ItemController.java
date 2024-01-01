package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
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
    public Item addItem(@RequestBody Item item) {
        this.itemRepository.save(item);
        return item;
    }

    @DeleteMapping("/{id}")
    public Item removeItem(@PathVariable("id") Long id) {
        Optional<Item> remoteItemOption = this.itemRepository.findById(id);
        if (remoteItemOption.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No item with that ID in the database");
        }
        Item itemForRemoval = remoteItemOption.get();
        this.itemRepository.delete(itemForRemoval);
        return itemForRemoval;

    }
}
