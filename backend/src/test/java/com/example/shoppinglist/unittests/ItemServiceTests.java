package com.example.shoppinglist.unittests;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.repository.ItemRepository;
import com.example.shoppinglist.service.ItemService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ItemServiceTests {
    @InjectMocks
    private ItemService itemService;

    @Mock
    private ItemRepository mockedItemRepository;

    @Test
    public void testFindAll() {
        Item item1 = new Item();
        item1.setId(1L);
        item1.setName("Sprouts");
        item1.setQuantity(1.5F);
        item1.setUnit("kg");

        Item item2 = new Item();
        item2.setId(2L);
        item2.setName("Bacon");
        item2.setQuantity(1F);
        item2.setUnit("pack");

        List<Item> items =Arrays.asList(item1, item2);

        when(mockedItemRepository.findAll()).thenReturn(items);

        Iterable<Item> result = itemService.findAll();
        assertEquals(items, result);
    }

    @Test
    public void testFindByID(){
        Item item1 = new Item();
        item1.setId(1L);
        item1.setName("Sprouts");
        item1.setQuantity(1.5F);
        item1.setUnit("kg");

        when(mockedItemRepository.findById(1L)).thenReturn(Optional.of(item1));
        Item result = itemService.findById(1);
        assertEquals(item1, result);
    }

    @Test
    public void testUpdateItem(){
        Item oldItem = new Item();
        oldItem.setId(1L);
        oldItem.setName("Sprouts");
        oldItem.setQuantity(1.5F);
        oldItem.setUnit("kg");

        Item updatedItem = new Item();
        updatedItem.setId(1L);
        updatedItem.setName("Potato");
        updatedItem.setQuantity(2F);
        updatedItem.setUnit("bags");

        when(mockedItemRepository.findById(1L)).thenReturn(Optional.of(oldItem));

        Item result = itemService.updateItem(1, updatedItem );
        assertEquals(updatedItem.getId(), result.getId());
        assertEquals(updatedItem.getName(), result.getName());
        assertEquals(updatedItem.getQuantity(), result.getQuantity());
        assertEquals(updatedItem.getUnit(), result.getUnit());
    }

    @Test
    public void testSave(){
        Item itemToSave = new Item();
        itemToSave.setId(1L);
        itemToSave.setName("Sprouts");
        itemToSave.setQuantity(1.5F);
        itemToSave.setUnit("kg");
        when(mockedItemRepository.save(itemToSave)).thenReturn(itemToSave);

        Item result = itemService.save(itemToSave );
        assertEquals(itemToSave,result);
    }

    @Test
    public void testRemoveItem(){
        Item itemToRemove = new Item();
        itemToRemove.setId(1L);
        itemToRemove.setName("Sprouts");
        itemToRemove.setQuantity(1.5F);
        itemToRemove.setUnit("kg");

        when(mockedItemRepository.findById(1L)).thenReturn(Optional.of(itemToRemove));

        Item result = itemService.removeItem(1L);

        assertEquals(itemToRemove,result);


    }

}
