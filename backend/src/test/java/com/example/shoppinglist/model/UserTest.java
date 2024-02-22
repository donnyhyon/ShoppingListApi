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

    @Test
    public void testFirstname(){
        String firstnameValue = "firstname";

        user.setFirstname(firstnameValue);

        assertEquals(firstnameValue, user.getFirstname());
    }

    @Test
    public void testSurname(){
        String surnameValue = "surname";

        user.setSurname(surnameValue);

        assertEquals(surnameValue, user.getSurname());
    }

    @Test
    public void testUsername(){
        String usernameValue = "test user";

        user.setUsername(usernameValue);

        assertEquals(usernameValue, user.getUsername());
    }

    @Test
    public void testPassword(){
        String passwordValue = "secretpassword";

        user.setPassword(passwordValue);

        assertEquals(passwordValue, user.getPassword());
    }
}


