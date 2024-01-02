package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Controller
public class ViewController {
    private final ItemRepository itemRepository;

    public ViewController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping("/index")
    public String showItemList(Model model) {
        model.addAttribute("items", itemRepository.findAll());
        return "index";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable("id") Long id, Model model) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        if (optionalItem.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No item found with that ID");
        }
        Item item = optionalItem.get();
        model.addAttribute("item", item);
        return "update-item";
    }
    @PostMapping("/update/{id}")
    public String updateItem(@PathVariable("id") long id, Item item,BindingResult result) {
        if (result.hasErrors()) {
            item.setId(id);
            return "update-item";
        }
        itemRepository.save(item);
        return "redirect:/index";
    }


    @GetMapping("/delete/{id}")
    public String deleteItem(@PathVariable("id") Long id, Model model) {
        Optional<Item> toBeDeletedOptional = itemRepository.findById(id);
        if (toBeDeletedOptional.isEmpty()) {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No ID found");
        }
        itemRepository.delete(toBeDeletedOptional.get());
        return "redirect:/index";
    }

    @GetMapping("/newitem")
    public String createNewItemForm(Item item) {
        return "add-item";
    }

    @PostMapping("/additem")
    public String addItem(@Validated Item item, BindingResult result) {
        if (result.hasErrors()) {
            return "add-item";
        }

        itemRepository.save(item);
        return "redirect:/index";
    }

}
