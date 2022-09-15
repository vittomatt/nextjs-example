FROM node:18-alpine3.15

# Use app's dir as working dir
WORKDIR /app

# Copy and install dependencies
COPY package*.json /app
RUN npm install

# Move all the app's code to the working dir
COPY . /app

# Start the app
CMD ["npm", "run", "start:prod"]