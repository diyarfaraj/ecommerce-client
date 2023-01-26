# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Build the app in the container
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the app in the container
CMD [ "npm", "start" ]