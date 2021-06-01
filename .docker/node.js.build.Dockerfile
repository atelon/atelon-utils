# node:14.16-buster -> ... -> debian:buster
FROM node:14.16-buster

RUN apt-get update -y

ENV NODE_ENV DEVELOPMENT

WORKDIR /home/node/app

COPY . .

RUN npm install

EXPOSE 9229

CMD [ "npm", "run", "build:all" ]
