FROM node:lts-alpine

WORKDIR /front

COPY front/package*.json ./

RUN npm install

EXPOSE 8080

COPY front/ .

CMD ["npm", "run", "serve"]