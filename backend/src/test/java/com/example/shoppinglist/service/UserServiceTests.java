package com.example.shoppinglist.service;

import com.example.shoppinglist.model.User;
import com.example.shoppinglist.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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



}
