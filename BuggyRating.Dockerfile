FROM mcr.microsoft.com/playwright:v1.30.0-focal as build

COPY . /src
RUN chmod -R 755 /src
WORKDIR /src

# command to run playwright once container is running
ENTRYPOINT ["sh", "/src/src/shell/buggy_rating_tests.sh"]