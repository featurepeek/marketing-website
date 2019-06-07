FROM nginx:stable-alpine

# force production when built from Docker
ENV NODE_ENV production

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
COPY public/* /usr/share/nginx/html

# expose public port
EXPOSE 3000
