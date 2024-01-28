package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/shoppinglist")
public class ItemController {

    @Autowired
    private final ItemService itemService;

    public ItemController(final ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping()
    public Iterable<Item> getItems() {
        return this.itemService.findAll();
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable Integer id) {
        return this.itemService.findById(id);
    }

    @PostMapping("/new")
    public Item addItem(@RequestBody Item item) {
        return this.itemService.save(item);
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable Integer id, @RequestBody Item newItem) {
         return this.itemService.updateItem(id, newItem);
    }

    @DeleteMapping("/{id}")
    public Item removeItem(@PathVariable("id") Long id) {
        return this.itemService.removeItem(id);
    }
}
