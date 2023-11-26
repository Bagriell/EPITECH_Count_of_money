FROM node:lts-alpine

WORKDIR /api

COPY api/package*.json ./

RUN npm install

EXPOSE 8000

COPY api/ .

CMD ["npm", "run", "start"]