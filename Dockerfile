FROM node:carbon

# Создать директорию app
WORKDIR /app/olga-vishnevskaya

# Установить зависимости приложения
RUN npm -g install serve
# Используется символ подстановки для копирования как package.json, так и package-lock.json
COPY . ./

RUN npm install

# Собрать статические файлы react/vue/angular
RUN npm run build

EXPOSE 4000
# Запуск сервера в директории dist на порту 4000
CMD ["serve", "-s", "dist", "-p", "4000"]