FROM node:lts as build-stage
WORKDIR /source
COPY . .
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
RUN npm install && npm run build

FROM node:lts as runtime
WORKDIR /app
# ENV NUXT_VERSION=2.15.1
COPY --from=build-stage /source/.nuxt/ /app/.nuxt/
COPY --from=build-stage /source/nuxt.config.js /app/
COPY --from=build-stage /source/static /app/
COPY --from=build-stage /source/api /app/

ENTRYPOINT ["npx","nuxt-start"]
# CMD
EXPOSE 80
