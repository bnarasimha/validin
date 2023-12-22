# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the content of your local 'my-static-website' directory to the Nginx document root
COPY . /usr/share/nginx/html
