FROM node:18

# Set the working directory to /app inside the container
WORKDIR /usr/src/app

# Copy app files
COPY . .

ENTRYPOINT ["node", "iqserver.js"]
