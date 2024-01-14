FROM node:18-alpine

RUN mkdir /webapp

WORKDIR /webapp

COPY public/ /public
COPY src /src
COPY package.json /

RUN npm install

CMD ["npm","start"]