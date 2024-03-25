package com.example.shoppinglist.controller;

import com.example.shoppinglist.controller.ItemController;
import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.service.ItemService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ItemController.class)
public class ItemControllerTests {

    @InjectMocks
    private ItemController itemController;

    @MockBean
    private ItemService mockedItemService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGetItems() throws Exception {
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

        List<Item> items = new ArrayList<Item>();
        items.add(item1);
        items.add(item2);


        when(mockedItemService.findAll()).thenReturn(items);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/shoppinglist"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(items.size()));
    }

    @Test
    public void testGetItemById() throws Exception {
        Item item = new Item();
        item.setId(1L);
        item.setName("Pringles");
        item.setQuantity(1F);
        item.setUnit("tube");

        when(mockedItemService.findById(1)).thenReturn(item);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/shoppinglist/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1L))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Pringles"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.quantity").value(1F))
                .andExpect(MockMvcResultMatchers.jsonPath("$.unit").value("tube"));
    }

    @Test
    public void testAddItem() throws Exception {
        Item itemToAdd = new Item();
        itemToAdd.setId(999L);
        itemToAdd.setName("Potato");
        itemToAdd.setQuantity(2F);
        itemToAdd.setUnit("kg");

        when(mockedItemService.save(itemToAdd)).thenReturn(itemToAdd);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/shoppinglist/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"id\":999,\"name\":\"Potato\",\"quantity\":2.0,\"unit\":\"kg\"}"))
                .andExpect(status().isOk());
        // TODO: understand why its not returning item object back

    }

    @Test
    public void testUpdateItem() throws Exception {
        Item originalItem = new Item();
        originalItem.setId(1L);
        originalItem.setName("Sprouts");
        originalItem.setQuantity(1.5F);
        originalItem.setUnit("kg");

        Item updatedItem = new Item();
        updatedItem.setId(1L);
        updatedItem.setName("Beans");
        updatedItem.setQuantity(2.0F);
        updatedItem.setUnit("kg");

        when(mockedItemService.updateItem(1, updatedItem)).thenReturn(updatedItem);

        mockMvc.perform(MockMvcRequestBuilders.put("/api/shoppinglist/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"id\":1,\"name\":\"Beans\",\"quantity\":2.0,\"unit\":\"kg\"}"))
                .andExpect(status().isOk());
        // TODO: understand why its not returning item object back
    }

    @Test
    public void testRemoveItem() throws Exception {
        Item itemToDelete = new Item();
        itemToDelete.setId(1L);
        itemToDelete.setName("Sardines");
        itemToDelete.setQuantity(1F);
        itemToDelete.setUnit("can");

        when(mockedItemService.removeItem(1)).thenReturn(itemToDelete);

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/shoppinglist/1")
            .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1L))
            .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Sardines"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.quantity").value(1L))
            .andExpect(MockMvcResultMatchers.jsonPath("$.unit").value("can"));
    }
}