package com.example.shoppinglist.api;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;

import io.restassured.matcher.RestAssuredMatchers.*;
import org.hamcrest.Matchers.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ItemControllerTests {

    @LocalServerPort
    int port;

    @BeforeEach
    public void setUp() {
        baseURI = "http://localhost:" + port;
    }

    @Test
    public void healthCheck() {
        get("/actuator/health").then().statusCode(200).assertThat()
                .body("status", equalTo("UP"));
    }

    @Test
    public void getItemTest() {
        get("/shoppinglist/1").then().statusCode(200).assertThat()
                .body(equalTo("{\"id\":1,\"name\":\"Sausages\",\"quantity\":12.0,\"unit\":\"pack\"}"));
    }

}
