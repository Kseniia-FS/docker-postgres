FROM node:14-alpine3.12

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# copying packages first helps take advantage of docker layers
COPY package*.json ./

RUN npm install -g nodemon
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
ENTRYPOINT ["nodemon", "/app/server.js"]

EXPOSE 8080

CMD [ "npm", "run", "dev" ]