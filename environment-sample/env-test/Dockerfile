FROM node:lts as build-stage
WORKDIR /source
COPY . .
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
ENV NUXT_ENV_BASE_URL='http://www.morhipo.com'
RUN npm install && npm run build
ENTRYPOINT ["npm","start"]
# CMD
EXPOSE 80
