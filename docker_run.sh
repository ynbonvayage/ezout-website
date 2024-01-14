docker build -t ezout-website:latest . --no-cache
docker run -it -p 80:80 -p 443:443 ezout-website