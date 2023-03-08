# Use the Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory (.) into the container at the /usr/src/app path (WORKDIR of the line above)
COPY . .

# Install the dependencies defined in package.json
RUN ["npm", "install"]

# Set the command to run when the container starts
CMD ["npm", "start"]
