# base image
FROM node:12.2.0-alpine

#created folder app
RUN mkdir /app

# set working directory
WORKDIR /app

# set app project  in folder app
COPY . /app

# npm install
RUN npm install

# start app
CMD ["npm", "start"]
