---
title: LIKE
date: 2023-11-08
---
## Выборка при помощи LIKE

- `%` - любая строка, содержащая ноль или более символов
- `_` - любой одиночный символ

### Синтаксис
```sql
SELECT ... FROM ... WHERE ... LIKE "_%"
```

### Пример
```mysql
SELECT title, author FROM book WHERE (title LIKE "_% _%") AND (title NOT LIKE "% % % %") AND (author LIKE "%С.%") ORDER BY title
```