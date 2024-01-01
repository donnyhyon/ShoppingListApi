package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
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

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable Integer id, @RequestBody Item newItem) {
        Optional<Item> itemToUpdateOptional = this.itemRepository.findById(Long.valueOf(id));
        if (itemToUpdateOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No item found with that ID");
        }
        Item originalItemToUpdate = itemToUpdateOptional.get();

        if (!ObjectUtils.isEmpty(newItem.getId())) {
            originalItemToUpdate.setId(newItem.getId());
        }
        if (!ObjectUtils.isEmpty(newItem.getName())) {
            originalItemToUpdate.setName(newItem.getName());
        }
        if (!ObjectUtils.isEmpty(newItem.getQuantity())) {
            originalItemToUpdate.setQuantity(newItem.getQuantity());
        }
        if (!ObjectUtils.isEmpty(newItem.getUnit())) {
            originalItemToUpdate.setUnit(newItem.getUnit());
        }
        return originalItemToUpdate;
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
