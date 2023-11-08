---
title: SUM, MAX, MIN, AVG
date: 2023-11-08
---
## Вычисления по таблице целиком
```mysql
SELECT MIN(price) AS "Минимальная_цена", MAX(price) AS "Максимальная_цена", ROUND(AVG(price),2) AS "Средняя_цена" FROM book
```

## Групповые функции
```mysql
SELECT 
  author, 
  SUM(price * amount) AS "Стоимость" 
FROM 
  book 
WHERE 
  (title <> "Идиот") 
  AND (
    title <> "Белая гвардия"
  ) 
GROUP BY 
  author 
HAVING 
  SUM(price * amount) > 5000 
ORDER BY 
  SUM(price * amount) DESC
```