FROM node:alpine
WORKDIR /book-store
COPY package.json .
RUN npm install
COPY . .
#RUN tsconfig.json
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]