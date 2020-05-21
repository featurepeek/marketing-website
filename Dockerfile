FROM node:12-alpine as build

# Set up build environment
WORKDIR /app
ENV NODE_ENV production

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Build from source
COPY . ./
RUN yarn build

# Copy built site to web server stage
FROM nginx:stable-alpine

COPY nginx_config /etc/nginx/conf.d/
COPY --from=build /app/public /usr/share/nginx/html/

# Expose HTTP
EXPOSE 80
