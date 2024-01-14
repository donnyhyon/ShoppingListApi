package com.example.shoppinglist.unittests;

import com.example.shoppinglist.controller.ItemController;
import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.service.ItemService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
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

        List<Item> items = Arrays.asList(item1, item2);

        when(mockedItemService.findAll()).thenReturn(items);

        mockMvc.perform(MockMvcRequestBuilders.get("/shoppinglist"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(items.size()));
    }
}