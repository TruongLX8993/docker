FROM node:14-slim
WORKDIR /app
ADD package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.mjs" ]