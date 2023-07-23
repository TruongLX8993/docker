FROM node:14

LABEL authors="truonglx"
MAINTAINER truonglx="truong@gmail.com"
ENTRYPOINT ["top", "-b"]
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["node","index.js"]
