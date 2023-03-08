# Use the Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Sets the working directory for any subsequent commands
WORKDIR /usr/src/app

# Copies the current directory (.) to the container working directory (.)
COPY . .

# Runs npm install to install dependencies declared in package.json
RUN ["npm", "install"]

# Runs the build script declared in package.json
RUN ["npm", "run", "build"]

# Sets the default command when the container starts
CMD ["npm", "run", "preview"]
