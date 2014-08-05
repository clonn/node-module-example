# DOCKER-VERSION 0.3.4
#enter a base image
FROM    ubuntu:14.04

#make sure all packages are up to date
RUN     apt-get -y update && apt-get -y upgrade

#Install node.js
RUN     apt-get -y install nodejs
RUN     apt-get -y install npm

# Bundle app source
COPY . /src

# Install app dependencies
RUN cd /src; npm install
EXPOSE 8080
CMD ["nodejs", "/src/index.js"]
