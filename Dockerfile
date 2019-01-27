FROM node:10-alpine

WORKDIR /pointeuse

run apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

COPY package.json .

RUN npm install -g node-gyp
RUN npm install

COPY . /pointeuse

ENV NODE_ENV=production

EXPOSE 3001

CMD npm run start:prod