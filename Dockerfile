FROM node:18-alpine
COPY . .
CMD ["npm", "run", "start"]
EXPOSE 8080