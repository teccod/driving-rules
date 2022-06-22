FROM mysql as mysql
WORKDIR /mysql
ENV MYSQL_DATABASE="drivingrules"
ENV MYSQL_ROOT_PASSWORD="root"
COPY drivingrules.sql /docker-entrypoint-initdb.d