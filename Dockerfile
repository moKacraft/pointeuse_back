FROM node:10-alpine

WORKDIR /pointeuse

RUN apk --no-cache add --virtual native-deps g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && npm install --quiet node-gyp -g

COPY package.json .

RUN npm install

COPY . /pointeuse

ENV NODE_ENV=production

EXPOSE 3001

CMD npm run start