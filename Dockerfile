FROM node:18-alpine3.15

# Create app's dir
RUN mkdir -p /nextjsexample

# Use app's dir as working dir
WORKDIR /nextjsexample

# Copy and install dependencies
COPY package*.json /nextjsexample//
RUN npm install

# Move all the app's code to the working dir
COPY . /nextjsexample/

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "run", "start:prod"]