### Scripts for local dev
`./start-fresh.sh` pulls, builds docker DB containers. Packages jar backend + tests. 
`./quick-start.sh` Must have DB image and JAR file compiled. 
`./tear-down.sh` Down and deletes the containers, cleans-up dangling images. 


### Run Tests
`cd backend && mvn clean test`

### Running with only db dockerised (localdev)
`cd database && docker build -t db:latest .`

`docker run -5432:5432 -it db:latest`

`cd ../backend && mvn clean package`

`mvn spring-boot:run`

`cd ../frontend && npm start`

### Running using Docker
Need to make sure a back-end jar file is created. To do this `cd backend && mvn clean package`

Then `cd ..` back up to project root to run
`docker compose up --build`

Access the front end at `localhost:3000`

#### Stopping docker and removing images
`docker compose down --rmi all`

#### Just build docker images
`docker compose up --build`

### Info only: Running docker manually (i.e no dockerfile)
1. Pull down latest postgres image from dockerhub
`docker pull postgres`
2. Create a new container if not already done so.

`docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`

3. If container already created, start the container

`docker start <container name>`


### Info only: Other commands
Remove container
`docker rm -f <container name>`

Create new react app
`npx create-react-app frontend`

Create docker image
`docker build -t shopping-list:latest .`

Run docker iamge
`docker run -p8080:8080 -it shopping-list:latest`

Useful docker flags:
`-it` run in ineractive mode
`--rm` , removes containers when docker down, Note the 2 "--" before the flag...

Check status of docker containers
`docker ps -a`

Check docker network
`docker network ls`

`docker network create <network name>`

`docker inspect <network name>`
