---
title: UPDATE
date: 2023-11-08
---
## Синтаксис
```sql
UPDATE ... SET ... = ..., ... = ...
```

## Пример
```mysql
UPDATE book 
SET price = price * 0.9
WHERE amount BETWEEN 5 AND 10;

UPDATE book 
SET price = IF(buy = 0, price * 0.9, price),
    buy = IF(buy > amount, amount, buy);

UPDATE book, supply
SET book.amount = book.amount + supply.amount,
    book.price = (book.price + supply.price) / 2
WHERE book.title = supply.title;

update fine as f, 
    (select name, number_plate, violation
    from fine 
    group by name, number_plate, violation
    having count(violation)>1
    ) as s 
set f.sum_fine=2*f.sum_fine
where f.number_plate=s.number_plate and f.date_payment is null;
```