package com.example.shoppinglist.hexagonal.adapters;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.hexagonal.ports.ItemPort;

import com.example.shoppinglist.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// Try to push all the service calls down to the port so that the adaptor calls the port on every method.
// Create an orchestrator. This orchestrator will create an instance of the port and adaptor,
// allowing you to pass the port through to the adaptor to make the calls.
// You will also need an instance of the ItemService for the port
// The Orchestrator should become the entry point for your API

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
        return this.itemPort.findAll();
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable Integer id) {
        return this.itemPort.findById(id);
    }

    @PostMapping("/new")
    public Item addItem(@RequestBody Item item) {
        return this.itemPort.save(item);
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable Integer id, @RequestBody Item newItem) {
        return this.itemPort.updateItem(id, newItem);
    }

    @DeleteMapping("/{id}")
    public Item removeItem(@PathVariable("id") Integer id) {
        return this.itemPort.removeItem(id);
    }
}
