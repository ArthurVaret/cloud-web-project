# Cloud WebApp Project

This code defines a Docker Compose file that sets up three services: `mongodb`, `api`, and `front`. The `mongodb` service uses the official `mongo` image and creates a named container that is connected to the `express` network. It also mounts a Docker volume to store data for the MongoDB container.

The `api` service depends on the `mongodb` service and builds a Docker image from a Dockerfile located in the `./backend` directory. It also creates a named container that is connected to the `express` network and exposes port `3000`. The service sets environment variables that specify the MongoDB URI, JWT secret, and API port.

The `front` service depends on the `api` service and builds a Docker image from a Dockerfile located in the `./frontend` directory. It also creates a named container that is connected to the `express` network and exposes port `8080`. The service sets an environment variable that specifies the API URL.

Finally, the `express` network is created as a Docker bridge network, and a volume is created to store data for the MongoDB container.

Explanation of volumes, depends_on, restart and environment :

- `volumes`: This section defines a Docker volume named `secure-web-dev-db`. Volumes are used to persist data across container restarts or removals. In this case, the volume is mounted to the `mongodb` container so that data stored in the `/data/db` directory is stored on the host machine.
- `depends_on`: This section lists the services that the current service depends on. In this case, the `api` service depends on the `mongodb` service and the `front` service depends on the `api` service. This ensures that the services are started in the correct order.
- `restart`: This section specifies the restart policy for the container. In this case, the `api` and `front` services are set to `unless-stopped`, which means that the container will always be restarted unless it was explicitly stopped by a user.
- `environment`: This section sets environment variables for the container. In this case, the `api` service sets the `MONGO_URI`, `JWT_SECRET`, and `API_PORT` environment variables. These variables are used in the backend code to connect to the MongoDB container, set the secret key for JWT authentication, and specify the port on which the API will run.


```Docker
services:
  mongodb:
    container_name: mongodb
    image: mongo:latest
    networks:
      - express
    volumes:
      - secure-web-dev-db:/data/db
  api:
    container_name: api
    depends_on: 
      - mongodb
    build: ./backend
    restart: unless-stopped
    networks:
      - express
    ports:
      - 3000
    environment:
      - MONGO_URI=mongodb://mongodb:27017/
      - JWT_SECRET=secret
      - API_PORT=3000
  front:
    container_name: app
    build: ./frontend
    restart: unless-stopped
    networks:
      - express
    ports:
      - 8080:4173
    depends_on:
      - api

networks:
  express:
    driver: bridge

volumes:
  secure-web-dev-db:
```
