FROM mhart/alpine-node:10.15

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
EXPOSE 3000

CMD [ "yarn", "serve" ]
