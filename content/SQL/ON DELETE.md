---
title: ON DELETE
date: 2023-11-08
---
## Определение
Устанавливает действие, которое выполнится для записи подчиненной таблицы при удалении связанной записи из главной таблицы

- `CASCADE` автоматически удаляет строки из зависимой таблицы при удалении записи из главной таблицы
- `SET NULL` устанавливает значение `NULL`
- `SET DEFAULT` устанавливает значение по умолчанию
- `RESTRICT` отклоняет удаление строк при наличии связанных строк в зависимой таблице

## Пример MySQL
```mysql
CREATE TABLE book (
    book_id INT PRIMARY KEY AUTO_INCREMENT, 
    author_id INT NOT NULL, 
    genre_id INT,
    FOREIGN KEY (author_id)  REFERENCES author (author_id) ON DELETE CASCADE, 
    FOREIGN KEY (genre_id)  REFERENCES genre (genre_id) ON DELETE SET NULL 
);
```