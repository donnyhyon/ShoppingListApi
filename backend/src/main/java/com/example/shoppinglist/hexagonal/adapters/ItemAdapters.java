package com.example.shoppinglist.hexagonal.adapters;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.hexagonal.ports.ItemPort;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/hexagonal/shoppinglist")
public class ItemAdapter {

    @Autowired
    private final ItemPort itemPort;

    public ItemAdapter(final ItemPort itemPort) {
        this.itemPort = itemPort;
    }

    @GetMapping()
    public Iterable<Item> getItems() {
        return this.ItemPort.findAll();
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
