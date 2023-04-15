FROM node:lts-alpine3.17 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.24.0-alpine3.17 AS deploy-static
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]