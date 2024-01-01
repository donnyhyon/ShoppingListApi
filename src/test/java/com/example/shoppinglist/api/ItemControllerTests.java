package com.example.shoppinglist.api;

import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;

import io.restassured.matcher.RestAssuredMatchers.*;
import org.hamcrest.Matchers.*;

public class ItemControllerTests {
    @Test
    public void healthCheck() {
        get("/actuator/health").then().statusCode(200).assertThat()
                .body("status", equalTo("UP"));
    }

    @Test
    public void getItemTest() {
        get("/shoppinglist").then().statusCode(200).assertThat()
                .body(equalTo("[{\"id\":1,\"name\":\"Item1\",\"quantity\":10.0,\"unit\":\"kg\"},{\"id\":2,\"name\":\"Item2\",\"quantity\":15.0,\"unit\":\"kg\"},{\"id\":3,\"name\":\"Item3\",\"quantity\":20.0,\"unit\":\"kg\"}]"));
    }

}
