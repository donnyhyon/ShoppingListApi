package com.example.shoppinglist.hexagonal.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ITEMS")
@Getter
@Setter
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "QUANTITY")
    private Float quantity;

    @Column(name = "UNIT")
    private String unit;

    public Item(Long id, String name, Float quantity, String unit) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
}
