package com.example.shoppinglist.integrationtests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
public class ItemControllerIntegrationTests {

    @LocalServerPort
    private int port;

    @Container
    public static PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:alpine")
        .withDatabaseName("test-db")
        .withUsername("test-user")
        .withPassword("test-password-test-db");
    
    @DynamicPropertySource
    static void registerPgProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgreSQLContainer::getJdbcUrl);
        registry.add("spring.datasource.username", postgreSQLContainer::getUsername);
        registry.add("spring.datasource.password", postgreSQLContainer::getPassword);
    }


    @BeforeEach
    public void setUp() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = port;
    }

    @Test
    public void getItemsShouldReturnItemList() {
        given()
        .contentType(ContentType.JSON)
        .when()
        .get("/shoppinglist")
        .then()
        .statusCode(200)
        .body("$", hasSize(greaterThan(0))); 
    }

    @Test
    public void getItemShouldReturnASingleItem() {
        given()
        .contentType(ContentType.JSON)
        .when()
        .get("/shoppinglist/1")
        .then()
        .statusCode(200)
        .body("id" , equalTo(1))
        .body("name", equalTo("Sausages"))
        .body("quantity", equalTo(12.0F))
        .body("unit", equalTo("pack"));
    }

    @Test
    public void getItemThatDoesNotExistshouldReturn404() {
        given()
        .contentType(ContentType.JSON)
        .when()
        .get("/shoppinglist/9999")
        .then()
        .statusCode(404);
    }



}