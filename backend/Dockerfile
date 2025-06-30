FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3333
CMD ["npm", "start", "/src/server.js"]    