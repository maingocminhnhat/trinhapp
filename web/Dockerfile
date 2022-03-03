FROM node:16.13.2-alpine

WORKDIR /usr/src/web

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code
COPY . .

# Build app
RUN yarn build

# Export port to use
EXPOSE 3000

# Run app
CMD ["yarn", "start"]
