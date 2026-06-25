FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache build-base python3 gcc g++ make

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache vips

COPY --from=builder /app ./

RUN npm prune --omit=dev

EXPOSE 1337

CMD ["npm", "run", "start"]