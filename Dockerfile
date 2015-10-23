FROM node:4.2.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# git clone command
RUN git clone https://github.com/claudioed/data-collector.git /data-collector

# Set workdir
WORKDIR /data-collector

# Switch to root user
USER root

# Start postgreSQL
CMD ["/usr/lib/postgresql/9.4.5/bin/postgres", "-D", "/var/lib/postgresql/9.4.5/main", "-c", "config_file=/etc/postgresql/9.4.5/main/postgresql.conf"]

# Install node dependencies
RUN npm install