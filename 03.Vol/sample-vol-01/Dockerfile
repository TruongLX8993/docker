FROM node:slim
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG DEFAULT_PORT=3000
ENV PORT $DEFAULT_PORT
EXPOSE $PORT
VOLUME [ "/app/logs" ]
CMD [ "npm", "start" ]
