FROM node:14-slim
WORKDIR /app
COPY . .
RUN npm install --product
EXPOSE 80
CMD ["node","server.js"]
