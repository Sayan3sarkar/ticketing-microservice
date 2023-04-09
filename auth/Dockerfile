FROM node:16-alpine

# Set working director to /app
WORKDIR /app

# Copy package.json of source code to /app
COPY package.json .

# Install dependencies
RUN npm install

# Copies all files and folders from current directory to /app - Done this way so that dependencies can be cached
COPY . .

CMD ["npm", "start"]