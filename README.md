### Running Locally
1. Pull down latest postgres image from dockerhub
`docker pull postgres`
2. Create a new container if not already done so.

`docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`

3. If container already created, start the container

`docker start <container name>`

4. Start back-end
`mvn spring-boot:run`

5. Start frontend
`cd frontend && npm start`


### Other commands
Remove container
`docker rm -f <container name>`

Create new react app
`npx create-react-app frontend`

Check status of docker containers
`docker ps -a`


Create docker image
`docker build --tag=shopping-list:latest .`

Run docker iamge
`docker run -p8080:8080 shopping-list:latest`