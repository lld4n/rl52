---
title: WHERE
date: 2023-11-08
---
## Выборка данных по условию

### Синтаксис
```sql
SELECT ... FROM ... WHERE condition
```

### Пример 
```sql
SELECT author, title, price FROM book WHERE amount < 10;

SELECT title, author, price, amount FROM book WHERE (price < 500 OR price > 600) AND amount * price >= 5000;

SELECT title, author FROM book WHERE (price BETWEEN 540.50 AND 800) AND amount IN (2, 3, 5, 7) ;
```