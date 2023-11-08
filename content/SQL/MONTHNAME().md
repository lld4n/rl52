---
title: MONTHNAME()
date: 2023-11-08
---
## Определение
Возвращает название месяца из даты

## Синтаксис
```sql
MONTHNAME(date1)
```

## Пример MySQL
```mysql
SELECT MONTHNAME(date_first) AS "Месяц", COUNT(name) AS "Количество"
FROM trip
GROUP BY MONTHNAME(date_first)
ORDER BY COUNT(name) DESC, MONTHNAME(date_first) ASC
```

## Пример PostgreSQL
```postgresql
SELECT TO_CHAR(date_first, 'Month') AS "Месяц", COUNT(name) AS "Количество"
FROM trip
GROUP BY TO_CHAR(date_first, 'Month')
ORDER BY COUNT(name) DESC, TO_CHAR(date_first, 'Month') ASC;
```