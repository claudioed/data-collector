FROM node:4.2.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# git clone command
RUN git clone https://github.com/claudioed/data-collector.git /data-collector

# Set workdir
WORKDIR /data-collector

# Install node dependencies
RUN npm install
