FROM node:22.3.0-alpine

WORKDIR /home

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3001

CMD [ "node","app.js" ]