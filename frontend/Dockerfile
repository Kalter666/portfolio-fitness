FROM node

# Создать директорию app
WORKDIR /app/olga-vishnevskaya

# Установить зависимости приложения
RUN npm -g install serve
# Используется символ подстановки для копирования как package.json, так и package-lock.json
COPY package*.json ./

RUN npm install

# Скопировать исходники приложения
COPY src /app/olga-vishnevskaya
# Собрать статические файлы react/vue/angular
RUN npm run build

EXPOSE 4000
# Запуск сервера в директории dist на порту 4000
CMD ["serve", "-s", "dist", "-p", "4000"]