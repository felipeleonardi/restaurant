FROM node:16-alpine as builder

# Set the working directory to /app inside the container
WORKDIR /.

# Copy app files
COPY . .

RUN TEST=23423423424dfs
RUN echo $TEST
