package com.example.shoppinglist.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class UserTest {

    private User user;

    @BeforeEach
    public void setUpNewUser(){
        user = new User();
    }

    @Test
    public void createUserClass(){

        assertNotNull(user);
    }

    @Test
    public void testId() {
        Long idValue = 1L;

        user.setId(idValue);

        assertEquals(idValue, user.getId());
    }

}
