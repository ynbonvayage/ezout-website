docker build -t ezout-website:latest . --no-cache
docker run -it -p 80:80 ezout-website