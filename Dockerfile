FROM node:11.15.0-alpine as build-step

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    apk add --update nodejs nodejs-npm

WORKDIR /app

COPY package.json ./

# Instalando dependencias
# RUN npm install rxjs@^6.0.0 --save-dev && \

#RUN  npm install @angular/common@8.2.13 --save-dev
# npm install @angular/common@^7.0.0 --save-dev && \
#     npm install @angular/common@^8.0.0 --save-dev && \

# Angular Core
# RUN npm install @angular/core@^6.0.0 --save-dev && \
#     npm install @angular/core@^7.0.0 --save-dev && \
#     npm install @angular/core@7.2.15 --save-dev && \
#     npm install @angular/core@^8.0.0 --save-dev && \
#     npm install @angular/core@8.2.13 --save-dev


# RUN npm install @angular/forms@^7.0.0 --save-dev

# RUN npm install @angular/platform-browser@7.2.15 --save-dev

# RUN npm install zone.js@^0.8.2 --save-dev
# RUN npm install popper.js@^1.14.7 --save-dev

#RUN npm i @angular/cli --dev-save
#RUN npm i --save-dev webpack
RUN npm install
# RUN npm install --save-dev fsevents
# RUN npm install --no-optional weex-toolkit -g
RUN npm install --no-optional


RUN npm i -f
COPY . .
#RUN npm i node-sass
RUN npm run build
RUN ls /app/dist/

FROM nginx:1.16.0-alpine as prod-stage
COPY --from=build-step /app/dist/app-manager-ui /usr/share/nginx/html

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]