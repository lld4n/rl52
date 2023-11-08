---
title: CREATE TABLE
date: 2023-11-08
---
## Определение
У каждой таблицы должно быть имя
- имя может включать английские буквы, цифры и знак подчеркивания, начинаться должно с буквы
- имя должно быть уникальным в пределах базы данных

Каждый атрибут 
- может включать английские буквы, цифры и знак подчеркивания, начинаться должно с буквы
- должен быть уникальным в пределах таблицы

## Синтаксис
```sql
create table name(...);
```

## Пример MySQL
```mysql
create table book(
  book_id INT PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(50), 
  author VARCHAR(30), 
  price DECIMAL(8, 2), 
  amount INT
);
```

## Пример PostgreSQL
```postgresql
create table book(
	book_id SERIAL PRIMARY KEY, 
	title VARCHAR(50), 
	author VARCHAR(30), 
	amount INT
)
```

## Создание таблицы на основе другой
```sql
CREATE TABLE ordering AS
SELECT author, title, (
    SELECT AVG(amount) FROM book
) AS amount
FROM book
WHERE amount < (
    SELECT AVG(amount) FROM book
);
```