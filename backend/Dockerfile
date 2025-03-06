FROM node:20.17.0-alpine3.19
WORKDIR /home/app
COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm install
COPY index.js index.js
CMD ["node","index.js"]
