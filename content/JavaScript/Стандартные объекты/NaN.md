---
title: NaN
date: 2023-11-05
---
## Определение
Глобальное свойство, означающее Not-A-Number. Аналогично [[Number|Number.NaN]]

## Как получить?
- Неудачное преобразование числа
	- `Number("fjdfjs")`
- Математическая операция, результат который не является действительным числом 
	- `Math.sqrt(-1)`
- Неопределенная форма
	- `0 * Infinity`
	- `1 ** Infinity`
	- `Infinity / Infinity`
	- `Infinity - Infinity`
- Метод или выражение, операнд которого является или становится принудительным [[NaN]]
	- `7 ** NaN`
- Другие случаи, когда недопустимое значение должно быть представлено в виде числа
	- `new Date("fjdfj").getTime()`

> **Важно**
> > `NaN !== NaN`
> > Это единственное значение в JavaScript, которое не равно самому себе

`NaN` можно быстро превратить в `1`, если возвести его в степень `0`, так как возведение в степень `0` немедленно возвращает `1` без проверки базового значения
## Тестирование против NaN
[[Number|Number.isNaN()]], глобальный метод [[isNaN()]] либо сравнение переменной с самой собой (`Number.NaN === NaN // false`)

> **Важно**
> > `isNaN()` возвращает `true`, если значение в настоящее время равно `NaN` или будет `NaN` после приведения его к числу. 
> > `Number.isNaN()` вернет `true`, если значение в данный момент равно `NaN`

Некоторые методы [[Массивы|массива]] не могут найти `NaN` (`indexOf()`), а некоторые могут (`includes()`)


