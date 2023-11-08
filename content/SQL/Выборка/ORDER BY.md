---
title: ORDER BY
date: 2023-11-08
---
## Выборка с сортировкой

### Синтаксис
```sql
SELECT ... FROM ... ORDER BY ...DESC, ... ASC, ...
```

- `DESC` - по убыванию
- `ASC` - по возрастанию
### Пример
```sql
SELECT author, title FROM book WHERE amount BETWEEN 2 AND 14 ORDER BY author DESC, title;
```