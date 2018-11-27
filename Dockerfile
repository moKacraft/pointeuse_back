FROM node:9-alpine

WORKDIR /pointeuse

COPY package.json /pointeuse

RUN npm install

COPY . /pointeuse

ENV NODE_ENV=production

EXPOSE 3001
CMD npm run start:prod