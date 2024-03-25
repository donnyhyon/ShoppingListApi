package com.example.shoppinglist.hexagonal.ports;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.service.ItemService;

import java.beans.JavaBean;

public class ItemPort {
	private ItemService itemService;

	public Iterable<Item> findAll()  {
		return this.itemService.findAll();
	}

	public Item findById(Integer id) {
		return this.itemService.findById(id);
	}

	public Item save(Item item){
		return this.itemService.save(item);
	}

	public Item updateItem(Integer id, Item item) {
		return this.itemService.updateItem(id, item);
	}

	public Item removeItem(Integer id) {
		return this.itemService.removeItem(id);
	}
}
