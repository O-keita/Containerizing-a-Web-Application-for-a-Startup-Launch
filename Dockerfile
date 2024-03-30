FROM nginx:alpine
COPY src/html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]