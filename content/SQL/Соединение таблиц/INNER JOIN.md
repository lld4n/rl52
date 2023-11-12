---
title: INNER JOIN
date: 2023-11-08
---
![[Pasted image 20231108100246.png]]

## Определение
Объединяет две таблицы, причем порядок таблиц неважен, так как оператор является симметричным. Добавляет в итоговую таблицу только те записи, которые проходят `condition`

## Синтаксис
```postgresql
SELECT ...
FROM ... INNER JOIN ...
ON condition
...
```

## Пример
```mysql
SELECT title, name_genre, price
FROM book INNER JOIN genre
ON book.genre_id = genre.genre_id
WHERE amount > 8
ORDER BY price DESC;

SELECT name_genre, title, name_author
FROM book 
    INNER JOIN genre ON book.genre_id = genre.genre_id
    INNER JOIN author ON book.author_id = author.author_id
WHERE name_genre = "Роман"
ORDER BY title;
```
