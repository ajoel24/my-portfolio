FROM node:lts-alpine3.17 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.18-alpine AS deploy-static
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build-static .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

FROM node:lts-alpine3.17 as deploy-node
WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build-node .
RUN yarn --prod
CMD [ "node", "index.js" ]
