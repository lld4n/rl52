---
title: LEFT-RIGHT JOIN
date: 2023-11-08
---
![[Pasted image 20231108100246.png]]

## Определение
Объединяет две таблицы, причем порядок таблиц важен, так как оператор является несимметричным. Вначале добавляет в итоговую таблицу все объединенные записи из обеих таблиц, проходящих условие `condition`. После этого добавляет все оставшиеся записи из левой таблицы, причем все поля второй таблицы заполняет `NULL`

Существует также `RIGHT JOIN`, который действует аналогично, но добавляет все оставшиеся записи из правой таблицы

## Синтаксис
```postgresql
SELECT ...
FROM ... LEFT JOIN ...
ON condition
...
```

## Пример
```mysql
SELECT DISTINCT name_genre
FROM genre LEFT JOIN book
ON genre.genre_id = book.genre_id
WHERE book_id IS NULL;

SELECT name_author, SUM(amount) as Количество
FROM author LEFT JOIN book
ON book.author_id = author.author_id
GROUP BY name_author
HAVING SUM(amount) IS NULL OR SUM(amount) < 10
ORDER BY SUM(amount) ASC
```