# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching installs)
COPY package*.json ./

# Update Alpine packages
RUN apk update && apk upgrade

# Install dependencies
RUN npm ci --production

# Copy the rest of the app
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port your app runs on
EXPOSE 5000

# Start the app
CMD ["node", "build/server.js"]
