FROM node:latest

WORKDIR /app

COPY . .
RUN npm install react-scripts
RUN npm run build
RUN npm install -g serve
CMD ["serve", "build"]
EXPOSE 3000