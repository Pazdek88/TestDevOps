FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Build using npx so the local webpack binary is used
RUN npx webpack --mode production