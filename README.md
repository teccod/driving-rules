# driving-rules

## Развертывание сервиса
1. Копируем репо в каталог /opt
```
git clone https://github.com/teccod/driving-rules
```
2. В папке /client/.env меняем URL на адрес сервера  
```
REACT_APP_API_URL='http://atscale.teccod.com:4000'  
```
3. Запускаем докер контейнеры
```
docker-compose up -d
```
4. Открываем 3000 и 4000 порты на сервере.  
Протестировать работу можно по ссылке http://mareiznode.teccod.com:3000


## Описание
## Install
```
sudo apt install npm
```

```
git clone https://github.com/teccod/driving-rules.git
```

```
cd client
npm install
npm build
npm start
```

```
cd ..
```

```
cd server
npm install
npm build
npm run dev
```

## Config server

Сonfig path server/.env

Default values

```
PORT=4000
DB_DATABASE=drivingrules
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
```
