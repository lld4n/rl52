---
title: Number
date: 2023-11-05
---
## Определение
Представляет собой числа с плавающей точкой

Хранит число в двойной точности в 64-битном двоичном формате. Не разграничения на десятичное число и целочисленное

- 1 бит для знака
- 11 бит для показателя степени (от -1022 до 1023)
- 52 бита для мантиссы (представляющей число от 0 до 1)

Мантисса - это часть числа, представляющая фактическое значение (значащие цифры). Показатель степени - это степень двойки, на которую следует умножить мантиссу. Точность мантиссы - это `2^(-52)`

Максимальное значение числа - это `2^1023 * (2 - 2^(-52))`. Значения выше этого заменяются [[Infinity]]

Целые числа могут быть в диапазоне от `-2^(53) + 1` до `2^(53) - 1`

## Конструктор
При вызове возвращает примитивные значения типа `Number`. При этом можно использовать с `new` и без

### Синтаксис
```js
new Number(value)
Number(value)
```

### Как это работает
- Числа приводятся к числам
- [[undefined]] превращается в [[NaN]]
- [[null]] превращается в `0`
- `true` превращается в `1`
- `false` превращается в `0`
- Строки преобразуются путем их анализа на наличие числовых литералов. Ошибка анализа возвращает [[NaN]]
	- Ведущие и конечные пробелы/ограничители строки не учитываются
	- `+`, `-` разрешены в начале строки для указания ее знака
	- `Infinity`, `-Infinity` распознаются как число
	- Пустые строки или строки только с пробелами преобразуются в `0`
- Объекты сначала преобразуются в примитивы, полученный примитив потом преобразуется в число

### Способы преобразования
- Унарный плюс `+...`
- `Number()`, но есть отличие от унарного плюса: [[BigInt]] не выбрасывает [[TypeError]]

### Примеры
```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

## Number.EPSILON
Представляет разницу между `1` и наименьшим числом с плавающей запятой, больше `1`

Используется для проверки равенства, так как если просто сравнить `0.1 + 0.2 === 0.3` вернет `false`

Поэтому для сравнения лучше использовать `Number.EPSILON`
```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}
const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

## Number.MAX_SAFE_INTEGER
Представляет собой максимальное безопасное **целое** число `2^53 - 1`

## Number.MAX_VALUE
Представляет собой максимальное числовое значение

## Number.MIN_SAFE_INTEGER
Представляет собой минимальное безопасное **целое** число `- 2^53 + 1`

## Number.MIN_VALUE
Представляет собой минимальное числовое значение

## Number.NaN
Представляет собой эквивалетное [[NaN]] значение

## Number.NEGATIVE_INFINITY
Представляет собой отрицательное значение бесконечности

- Любое положительное значение, включая `POSITIVE_INFINITY`, умноженное на, `NEGATIVE_INFINITY`равно `NEGATIVE_INFINITY`.
- Любое отрицательное значение, включая `NEGATIVE_INFINITY`, умноженное на, `NEGATIVE_INFINITY`равно `POSITIVE_INFINITY`
- Любое положительное значение, разделенное на, `NEGATIVE_INFINITY`представляет собой отрицательный ноль
- Любое отрицательное значение, разделенное на, `NEGATIVE_INFINITY`является положительным нулем
- Ноль, умноженный на `NEGATIVE_INFINITY`, равен [[NaN]]
- [[NaN]] умноженное на `NEGATIVE_INFINITY`есть [[NaN]]
- `NEGATIVE_INFINITY`, разделенное на любое отрицательное значение `NEGATIVE_INFINITY`, кроме , равно `POSITIVE_INFINITY`
- `NEGATIVE_INFINITY`, разделенное на любое положительное значение `POSITIVE_INFINITY`, кроме , равно `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, разделенное на `NEGATIVE_INFINITY`или `POSITIVE_INFINITY`, составляет [[NaN]]
- `x > Number.NEGATIVE_INFINITY`верно для любого числа _x_ , которое не является `NEGATIVE_INFINITY`

## Number.POSITIVE_INFINITY
Аналогично [[#Number.NEGATIVE_INFINITY]], но включает положительное значение бесконечности

## Number.isFinite()
Статический метод. Определяет является ли переданное значение конечным числом, то есть не является [[NaN]], [[Infinity]]. В отличие от [[isFinite()]] не приводит сначала к числу

### Синтаксис
```js
Number.isFinite(value)
```

## Number.isInteger()
Статический метод. Определяет, является ли переданное значение целым числом. Если значение равно [[NaN]] и [[Infinity]], вернется `false`

### Синтаксис
```js
Number.isInteger(value)
```

## Number.isNaN()
Статический метод. Определяет, является ли переданное значение [[NaN]], но в отличие от [[isNaN()]] не приводит сначала к числу

### Синтаксис
```js
Number.isNaN(value)
```

## Number.parseFloat()
Идентичен [[parseFloat()]]

## Number.parseInt()
Идентичен [[parseInt()]]

## Number.prototype.toFixed()
Возвращает строку из числа с указанной точностью

Принимает аргумент, который буквально говорит, сколько нужно знаков после запятой, агрумент должен состоять в промежутке от `0` до `100`. Если агрумент не указан, то принимается за `0`

> Важно
> > Для отрицательных чисел, необходимо определить очередность с помощью скобок, так как операция вызова функции имеет более высокий приоритет, чем унарный минус
> > `(-1).toFixed()`

### Синтаксис
```js
toFixed(digits?)
```

### Пример
```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'; it rounds up
(2.55).toFixed(1); // '2.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lower
(2.449999999999999999).toFixed(1); // '2.5'
// it rounds up as it's less than Number.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; large numbers still use exponential notation
```

## Number.prototype.toString()
Возвращает строку, которая представляет это числовое значение

Может принимать агрумент от `2` до `36`, который обозначает систему счисления

### Синтаксис
```js
toString(radix?)
```

### Пример
```js
const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"
```

## Другое
- `Number.isSafeInteger()`
- `Number.prototype.toExponential()`
- `Number.prototype.toLocaleString()`
- `Number.prototype.toPrecision()`
- `Number.prototype.valueOf()`