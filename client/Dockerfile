FROM node:18

RUN npm install -g http-server

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy files
COPY . .

# Build app
RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]