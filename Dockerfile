# Use the official Node.js image from Docker Hub
FROM node:20-alpine

# Set the working directory
WORKDIR /equitybharat

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy environment variables file
COPY .env .env

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
