FROM eclipse-temurin:17

RUN mkdir /opt/app

COPY target/shoppinglist-1.0.0.jar /opt/app

CMD ["java", "-jar", "/opt/app/shoppinglist-1.0.0.jar"]