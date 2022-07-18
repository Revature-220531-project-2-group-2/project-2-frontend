# declare node as the base image so we can run install 
FROM node:14.15.5 as builder

# this is the working directory the container will be instructed to work with
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# by this point we have all the source code and dependencies to build the dist folder
RUN npm run build --prod
# pass off the static resources to a web server
FROM nginx:1.15.8-alpine

# nginx

# pass the distributable artifact to Nginx to host
COPY --from=builder /usr/src/app/dist/dnd-web-app/ /usr/share/nginx/html
