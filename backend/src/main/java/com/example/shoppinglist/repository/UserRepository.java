package com.example.shoppinglist.repository;

import com.example.shoppinglist.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
