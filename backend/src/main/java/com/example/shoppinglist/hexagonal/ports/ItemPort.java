package com.example.shoppinglist.hexagonal.ports;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.service.ItemService;

import java.beans.JavaBean;

public class ItemPort {
	private ItemService itemService;

	public Iterable<Item> getItems()  {
		return this.itemService.findAll();
	}
}
