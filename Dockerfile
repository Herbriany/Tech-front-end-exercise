FROM node:10
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install
CMD npm run build
EXPOSE 8080