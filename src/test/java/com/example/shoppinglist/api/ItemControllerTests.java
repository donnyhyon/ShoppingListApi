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

}
