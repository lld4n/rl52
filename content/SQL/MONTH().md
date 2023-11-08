---
title: MONTH()
date: 2023-11-08
---
## Определение
Возвращает месяц из даты

## Синтаксис
```sql
MONTH(date1) 
```

## Пример MySQL
```mysql
SELECT name, city, date_first, date_last
FROM trip
WHERE MONTH(date_first) = MONTH(date_last)
ORDER BY city ASC, name ASC
```

## Пример PostgreSQL
```postgresql
SELECT name, city, date_first, date_last
FROM trip
WHERE EXTRACT(MONTH FROM date_first) = EXTRACT(MONTH FROM date_last)
ORDER BY city ASC, name ASC;
```