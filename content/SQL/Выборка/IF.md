---
title: IF
date: 2023-11-08
---
## Выборка данных с логической функцией

### Синтаксис
```sql
SELECT IF(condition, val1, val2) AS title FROM name_table;
```

### Пример MySQL
```mysql
SELECT author, title, IF(author = "Булгаков М.А.", ROUND(price * 1.1, 2), IF(author = "Есенин С.А.", ROUND(price * 1.05, 2), price)) AS new_price FROM book
```

### Пример PostgreSQL
```postgresql
SELECT author, title, 
    CASE 
        WHEN author = 'Булгаков М.А.' THEN ROUND(price * 1.1, 2)
        WHEN author = 'Есенин С.А.' THEN ROUND(price * 1.05, 2)
        ELSE price
    END AS new_price 
FROM book;
```
