# Rocket backend

Бэкенд часть тестового задания, с фронтенд частью можно ознакомиться
[здесь](https://github.com/sizieks/rocket-frontend).

## Описание

Простой сервер на [Nest](https://nestjs.com/). GET-запрос по маршруту `/leads`
возвращает список случайно сгенерированных сделок. Отдача происходит с учётом
фильтрации по ключу `user`, при наличии соответствующего query-параметра.

### Пример объекта

```javascript
{
  "id": "1hiamjbte067dc10fd27db",
  "name": "Случайная сделка #3",
  "price": 2276,
  "user": "Ермолай Павлов",
  "created_at": "2002-09-20T04:59:45.323Z",
  "status_name": "Успешно реализовано",
  "status_color": "#ffc8c8",
  "contact_name": "Глеб Морозов",
  "contact_phone": "+74433253382",
  "contact_email": "dolorsitamet@lorem.ipsum"
},
```
