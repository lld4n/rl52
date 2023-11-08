---
title: HAVING
date: 2023-11-08
---
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