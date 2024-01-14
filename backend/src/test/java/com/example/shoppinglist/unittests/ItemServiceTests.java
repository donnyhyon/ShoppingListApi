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

}
