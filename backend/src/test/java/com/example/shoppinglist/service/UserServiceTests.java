package com.example.shoppinglist.service;

import com.example.shoppinglist.model.Item;
import com.example.shoppinglist.model.User;
import com.example.shoppinglist.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)

public class UserServiceTests {
    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository mockedUserRepository;

    @Test
    public void findUser(){
        User user = new User();
        user.setId(1L);
        user.setUsername("testuser");
        user.setFirstname("Testy");
        user.setSurname("Testerson");
        user.setPassword("secretPassWord");
        user.setEmail("test@example.com");

        when(mockedUserRepository.findById(1L)).thenReturn(Optional.of(user));

        User result = userService.findById(1L);

        assertEquals(user, result);
    }

    @Test
    public void findAllUsers(){
        User user1 = new User();
        user1.setId(1L);
        user1.setUsername("testuser");
        user1.setFirstname("Testy");
        user1.setSurname("Testerson");
        user1.setPassword("secretPassWord");
        user1.setEmail("test@example.com");

        User user2 = new User();
        user2.setId(1L);
        user2.setUsername("testuser");
        user2.setFirstname("Testy");
        user2.setSurname("Testerson");
        user2.setPassword("secretPassWord");
        user2.setEmail("test@example.com");

        List<User> users = Arrays.asList(user1, user2);

        when(mockedUserRepository.findAll()).thenReturn(users);

        Iterable<User> result = userService.findAll();

        assertEquals(users, result);
    }



}
