FROM eclipse-temurin:17

RUN mkdir /app

WORKDIR /app

COPY target/shoppinglist.jar shoppinglist.jar

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "shoppinglist.jar" ]

