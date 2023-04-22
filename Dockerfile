FROM node:lts-alpine3.17
WORKDIR /app
ADD build-node build
COPY package.json .
RUN yarn --prod
EXPOSE 3000
CMD [ "node", "build/index.js" ]
