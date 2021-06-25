FROM node:lts-alpine as build-stage
WORKDIR /source
COPY . .
RUN npm install && npm run build

FROM nginx:1.20.0-alpine AS runtime
COPY nginx-default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build-stage /source/dist/ .
EXPOSE 80