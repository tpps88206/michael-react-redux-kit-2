FROM node:18.12.1 AS compiler
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY . .
ARG REACT_APP_FLAVOR
ENV REACT_APP_FLAVOR $REACT_APP_FLAVOR
RUN yarn build

FROM nginx:alpine
COPY --from=compiler /app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 80