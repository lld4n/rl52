---
title: LIMIT
date: 2023-11-08
---
## Определение
Ограничивает количество возвращаемых записей

## Синтаксис
```sql
SELECT ... FROM ... LIMIT ...
```

##  Пример
```sql
SELECT city, COUNT(city) AS "Количество"
FROM trip
GROUP BY city
ORDER BY COUNT(city) DESC
LIMIT 2
```