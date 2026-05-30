FROM node:25.8.0-alpine3.23

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock 
RUN yarn

COPY public public
COPY index.html index.html
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.node.json tsconfig.node.json
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts
COPY src src

CMD yarn dev