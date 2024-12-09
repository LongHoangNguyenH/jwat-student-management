FROM node:18.1-alpine

WORKDIR /home/app

COPY ./ /home/app/

RUN npm install

ENV PORT=3000

EXPOSE 3000

CMD [ "node","app.js" ]