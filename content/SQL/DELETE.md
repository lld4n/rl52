---
title: DELETE
date: 2023-11-08
---
## Синтаксис
```sql
DELETE FROM ...
```

## Примеры
```sql
DELETE FROM book; /* удаляет все */

DELETE FROM supply
WHERE author IN (
    SELECT author
    FROM book
    GROUP BY author
    HAVING SUM(amount) > 10
)
```