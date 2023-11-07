---
title: SELECT
date: 2023-11-08
---
## Выборка всех данных 

### Синтаксис
```sql
SELECT * FROM name_table;
```

## Выборка отдельных столбцов

### Синтаксис
```sql
SELECT name_column1, name_column2 FROM name_table
```

## Присвоение новых имен столбцам при формировании выборки

### Синтаксис
```sql
SELECT name_column AS dif_name_column FROM name_table;
```

### Пример
```sql
SELECT title AS Название, author AS Автор FROM book
```

## Выборка данных с созданием вычисляемого столбца

### Синтаксис
```sql 
SELECT name_column1 oper(*) name_column2 AS title FROM name_table
```

### Пример
```sql
SELECT title, amount, amount * 1.65 AS pack FROM book;
```

