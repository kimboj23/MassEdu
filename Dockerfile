# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Install build tools required for native Node.js modules.
# This is necessary for dependencies that need to be compiled from source.
RUN apk add --no-cache build-base python3

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application source code
COPY . .
RUN yarn run build

# Production stage
FROM nginx:1.25-alpine AS production

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]