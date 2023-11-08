---
title: INSERT INTO
date: 2023-11-08
---
## Определение
Добавляет запись в таблицу

## Синтаксис
```sql
INSERT INTO name(...) VALUES (...);
```

##  Пример
```sql
INSERT INTO book(title, author, price, amount) VALUES ("Мастер и Маргарита", "Булгаков М.А.", 670.99, 3);

INSERT INTO supply(title, author, price, amount)
VALUES
    ("Лирика", "Пастернак Б.Л.", 518.99, 2),
    ("Черный человек", "Есенин С.А.", 	570.20, 6),
    ("Белая гвардия", "Булгаков М.А.", 540.50, 7),
    ("Идиот", "Достоевский Ф.М.", 360.80, 3);
```

## Добавление записей из другой таблицы
```mysql
INSERT INTO book(title, author, price, amount)
SELECT title, author, price, amount
FROM supply
WHERE (
    author != "Булгаков М.А." 
    AND
    author != "Достоевский Ф.М."
);


INSERT INTO book(title, author, price, amount)
SELECT title, author, price, amount
FROM supply
WHERE author NOT IN (
    SELECT author
    FROM book
)
```