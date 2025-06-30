FROM ubuntu:20.04
WORKDIR /backend
RUN apt-get update && \
    apt-get install -y nodejs npm
COPY package*.json /backend/
RUN npm install
COPY . /backend/
EXPOSE 3333
CMD ["npm", "start"]