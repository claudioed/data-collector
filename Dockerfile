FROM node:4.2.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

ADD package.json /data-collector/
WORKDIR /data-collector
RUN npm install
ADD . /data-collector