FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  git \
  nodejs \
  wget \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

RUN node . --server