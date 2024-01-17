#!/bin/bash

cd database
docker build -t db:latest .
docker run -d -p5432:5432 -it db:latest

cd ../backend
mvn clean package
mvn spring-boot:run &

cd ../frontend
npm start