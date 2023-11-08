---
title: GROUP BY
date: 2023-11-08
---
## Выборка уникальных элементов

### Синтаксис
```sql
SELECT DISTINCT ... FROM ...;
SELECT ... FROM ... GROUP BY ...;
```

### Пример
```sql
SELECT DISTINCT amount FROM book;

SELECT author as "Автор", COUNT(title) AS "Различных_книг", SUM(amount) AS "Количество_экземпляров" FROM book GROUP BY author;

SELECT author, MIN(price) AS "Минимальная_цена", MAX(price) AS "Максимальная_цена", AVG(price) AS "Средняя_цена" FROM book GROUP BY author;

SELECT 
  author, 
  SUM(price * amount) AS "Стоимость", 
  ROUND(
    (
      SUM(price * amount) * (18 / 100)
    )/ (1 + 18 / 100), 
    2
  ) AS "НДС", 
  ROUND(
    (
      SUM(price * amount) / (1 + 18 / 100)
    ), 
    2
  ) AS "Стоимость_без_НДС" 
FROM 
  book 
GROUP BY 
  author;
```