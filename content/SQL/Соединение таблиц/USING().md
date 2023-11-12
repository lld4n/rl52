---
title: USING()
date: 2023-11-09
---
## Определение 
Позволяет указать набор столбцов, которые есть в обеих объединяемых таблицах

## Синтаксис
```mysql
SELECT title, name_author, author.author_id
FROM author INNER JOIN book 
ON author.author_id = book.author_id;

или 

SELECT title, name_author, author_id 
FROM author INNER JOIN book
USING(author_id);
```

## Пример
```mysql
SELECT supply.title AS Название,supply.author AS Автор, q.amount + supply.amount AS Количество
FROM supply INNER JOIN (SELECT title, name_author AS author, amount, price
    FROM book 
    INNER JOIN author
    USING(author_id)) AS q
    ON q.title = supply.title AND q.price = supply.price
```