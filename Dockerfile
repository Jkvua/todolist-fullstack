FROM ubuntu:20.04
WORKDIR /backend
RUN apt-get update && \
    apt-get install -y nodejs npm
COPY /backend/package.json /backend/
RUN npm install
EXPOSE 3333
CMD ["npm", "start"]