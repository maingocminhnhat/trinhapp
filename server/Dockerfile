FROM node:16.13.2-alpine

WORKDIR /usr/src/server

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code
COPY . .

# Build app

# Export port to use
EXPOSE 1987

# Run app
CMD ["yarn", "server"]
