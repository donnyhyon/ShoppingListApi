package com.example.shoppinglist.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ItemTest {
    private Item item;

    @BeforeEach
    public void setUp() {
        item = new Item();
    }

    @Test
    public void testId() {
        Long idValue = 1L;
        item.setId(idValue);
        assertEquals(idValue, item.getId());
    }

    @Test
    public void testName() {
        String nameValue = "Test Item";
        item.setName(nameValue);
        assertEquals(nameValue, item.getName());
    }

    @Test
    public void testQuantity() {
        Float quantityValue = 1.5F;
        item.setQuantity(quantityValue);
        assertEquals(quantityValue, item.getQuantity());
    }

    @Test
    public void testUnit() {
        String unitValue = "kg";
        item.setUnit(unitValue);
        assertEquals(unitValue, item.getUnit());
    }
}