FROM eclipse-temurin:17

RUN mkdir /api

WORKDIR /api

COPY target/shoppinglist.jar shoppinglist.jar

EXPOSE 8080



ENTRYPOINT [ "java", "-jar", "shoppinglist.jar","--spring.profiles.active=docker" ]

