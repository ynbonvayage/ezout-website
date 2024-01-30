# Stage 1: Build the React application
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code of the app
COPY . .

# Build the app
RUN npm run build

# Stage 2: Setup Nginx to serve the React application with HTTPS
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration and certificates
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY cert.pem /etc/ssl/certs/cert.pem
# COPY key.pem /etc/ssl/private/key.pem
# EXPOSE 443
COPY nginx.conf /etc/nginx/nginx.conf

# Expose both port 80 and 443
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
