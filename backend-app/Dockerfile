FROM node:18-alpine
# Installing libvips-dev is often required for Strapi image processing
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/app

# Copy lock files first for caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the Strapi admin panel
RUN npm run build

EXPOSE 1337
CMD ["npm", "run", "start"]