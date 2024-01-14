package com.example.shoppinglist.service;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Iterable<Item> findAll() {
         return this.itemRepository.findAll();
     }

     public Item findById(Integer id) {
         Optional<Item> itemOptional = this.itemRepository.findById(Long.valueOf(id));
         if (itemOptional.isEmpty()) {
             throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No item found with that ID");
         }
         return itemOptional.get();
     }

     public Item updateItem(Integer id, Item newItem) {
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

         this.itemRepository.save(originalItemToUpdate);
         return originalItemToUpdate;
     }

     public Item save(Item itemToSave) {
         return this.itemRepository.save(itemToSave);
     }

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
