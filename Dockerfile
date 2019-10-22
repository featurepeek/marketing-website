FROM nginx:stable-alpine

# force production when built from Docker
ENV NODE_ENV production

RUN apk update
RUN apk add nodejs-current-npm
RUN npm install -g yarn

# Copy nginx config 
COPY gzip.conf /etc/nginx/conf.d/gzip.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Create directories all the way up to app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app

# build
RUN yarn build

# copy built assets to nginx
RUN cp -r ./public/* /usr/share/nginx/html

# expose public port
EXPOSE 80
