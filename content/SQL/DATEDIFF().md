---
title: DATEDIFF()
date: 2023-11-08
---
## Определение
Возвращает количество дней между двумя датами

## Синтаксис
```mysql
DATEDIFF(date1, date2)
```
## PostgreSQL
В PostgreSQL такой функции нет, поэтому необходимо использовать аналог `DATE_PART('day', дата_2 - дата_1)`

## Пример MySQL
```mysql
DATEDIFF('2020-04-01', '2020-03-28') = 4;
DATEDIFF('2020-05-09','2020-05-01') = 8;

SELECT name, city, DATEDIFF(date_last, date_first) + 1 AS "Длительность"
FROM trip
WHERE city != "Москва" AND city != "Санкт-Петербург"
ORDER BY DATEDIFF(date_last, date_first) DESC, city DESC;


SELECT name, city, date_first, date_last
FROM trip
WHERE DATEDIFF(date_last, date_first) = (
    SELECT MIN(DATEDIFF(date_last, date_first))
    FROM trip
);

SELECT name, city, date_first, (DATEDIFF(date_last, date_first) + 1) * per_diem AS "Сумма"
FROM trip
WHERE MONTH(date_first) = 2 OR MONTH(date_first) = 3
ORDER BY name ASC, (DATEDIFF(date_last, date_first) + 1) * per_diem DESC;
```

##  Пример PostgreSQL
```postgresql
SELECT name, city, EXTRACT(DAY FROM (date_last - date_first)) + 1 AS "Длительность"
FROM trip
WHERE city != 'Москва' AND city != 'Санкт-Петербург'
ORDER BY EXTRACT(DAY FROM (date_last - date_first)) DESC, city DESC;


SELECT name, city, date_first, (DATE_PART('day', date_last - date_first) + 1) * per_diem AS "Сумма"
FROM trip
WHERE EXTRACT(MONTH FROM date_first) = 2 OR EXTRACT(MONTH FROM date_first) = 3
ORDER BY name ASC, (DATE_PART('day', date_last - date_first) + 1) * per_diem DESC;
```