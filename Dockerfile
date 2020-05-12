FROM node:12-alpine
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp -g
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install --silent
COPY --chown=node:node . .
RUN npm run build
EXPOSE 3232
ENTRYPOINT [ "npm", "run", "serve:prod" ]
