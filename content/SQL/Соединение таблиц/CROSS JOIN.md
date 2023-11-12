---
title: CROSS JOIN
date: 2023-11-08
---
## Определение
Оператор перекрестного соединения соединяет две таблицы. Порядок неважен. В результате получаем все возможные сочетания строк двух таблиц

![[Pasted image 20231108101726.png]]

## Синтаксис
```postgresql
SELECT ...
FROM ... CROSS JOIN ...
ON condition
...

или

SELECT ...
FROM ..., ...
ON condition
...
```

## Пример MySQL
```mysql
SELECT name_city, name_author, DATE_ADD('2020-01-01', INTERVAL FLOOR(RAND() * 365) DAY) AS Дата
FROM city CROSS JOIN author
ORDER BY name_city ASC, 3 DESC
```

## Пример PostgreSQL
```postgresql
SELECT name_city, name_author, '2020-01-01'::date + floor(random() * 365) * '1 day'::interval AS "Дата"
FROM city CROSS JOIN author
ORDER BY name_city ASC, "Дата" DESC
```