FROM node:18

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy files
COPY . .

# Init prisma client
RUN npx prisma generate

EXPOSE 8080

CMD [ "npm", "start" ]

