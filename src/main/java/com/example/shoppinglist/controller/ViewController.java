package com.example.shoppinglist.controller;

import com.example.shoppinglist.repositories.ItemRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
}
