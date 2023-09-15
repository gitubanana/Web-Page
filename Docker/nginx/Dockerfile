FROM alpine
RUN apk update && apk add \
    nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
