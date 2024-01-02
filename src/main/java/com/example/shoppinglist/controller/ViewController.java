package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

    @GetMapping("/add-item")
    public String getNewUserPage() {
        return "add-item";
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

    @PostMapping("/add-item")
    public String addItem(@RequestBody Item item, Model model){
        itemRepository.save(item);
        return "redirect:/added-item";
    }
}
