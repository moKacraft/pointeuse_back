FROM node:9-alpine

WORKDIR /pointeuse

RUN apt-get update && apt-get install -y build-essential && apt-get install -y python

COPY package.json .

RUN npm install

COPY . /pointeuse

ENV NODE_ENV=production

EXPOSE 3001

CMD npm run start:prod