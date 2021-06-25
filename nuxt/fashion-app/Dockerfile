FROM node:lts as build-stage
WORKDIR /source
COPY . .
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
RUN npm install && npm run build
ENTRYPOINT ["npm","start"]
# CMD
EXPOSE 80

# FROM node:lts as runtime
# WORKDIR /app
# COPY --from=build-stage /source/.nuxt/ ./.nuxt/
# COPY --from=build-stage /source/nuxt.config.js .
# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=80
# ENTRYPOINT ["npx","nuxt","start"]
# EXPOSE 80
