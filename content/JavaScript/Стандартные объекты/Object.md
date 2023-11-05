---
title: Object
date: 2023-11-05
---
## Определение
Используется для хранения различных коллекций с ключами и более сложных объектов. Можно создать с использованием `Object()` или синтаксиса инициализатора объекта `{}`

Почти все объекты являются экземплярами `Object`, кроме созданных null-прототипных объектов

> В общем, все и везде в JavaScript - это объекты

## Конструктор
Конструктор `Object()` превращает входные данные в объект. Его поведение зависит от входных данных

Можно вызывать и с `new` и без

### Синтаксис
```js
new Object()
new Object(value?)

Object()
Object(value?)
```

### Возвращаемое значение
Когда `Object()`  вызывается или создается сам конструктор, его возвращаемое значение - это объект:
- Если значение равно [[null]] или [[undefined]], он создает и возвращает пустой объект
- Если значение уже является объектом, оно возращает значение
- Иначе возвращает объект типа, соответствующего данному значению

## Object.assign()
Статический метод копирует все перечислимые собственный свойства из одного или несколькоих исходный объектов в целевой объект. Возвращает измененный целевой объект

Свойства в целевом объекте перезаписываются свойствами в источниках, если они имеют тот же ключ. Свойства более поздних источников перезаписывают более ранние.
### Синтаксис
```js
Object.assign(target)
Object.assign(target, source1?)
Object.assign(target, source1?, source2?)
Object.assign(target, source1?, source2?, /* …, */ sourceN?)
```

### Примеры
#### Базовый пример
```js
let user = {age: 1};
let userName = {name: "Name"};
Object.assign(user, userName);
// user = {name: "Name", age: 1}
```

#### Клонирование объекта
```js
const obj = {a: 1};
const copy = Object.assign({}, obj);
// copy = {a: 1}
```

> **Важно**
> > Для глубокого клонирования надо использовать [[structuredClone()]]
#### Примитивы будут обернуты в объекты
```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
#### Методы
```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let copy = Object.assign({}, obj);
// { foo: 1, bar: 2 }
```

## Object.entries()
Возвращает массив массивов, где каждый элемент - это массив из ключа и значения

### Синтаксис
```js
Object.entries(obj)
```

### Примеры
#### Базовый пример
```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
```
#### Примитивы
Если передать примитив, то он будет приведен к объекту. В таком случае только строки вернут непустой массив, все остальные примитивы вернут пустой массив
```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives have no own properties
console.log(Object.entries(100)); // []
```
#### Преобразование объекта в карту
```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```
#### Итерация по объекту
```js
// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## Object.fromEntries()
Делает обратное [[#Object.entries()]], то есть принимает массив массивов из ключей-значений и создает объект

### Синтаксис
```js
Object.fromEntries(iterable)
```

### Примеры
#### Преобразование Map в объект
```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```
#### Преобразование массива в объект
```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```
#### Преобразование объектов
```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Object.is()
Статический метод определяет, являются ли два значения одним и тем же значением

Вернет `true`, если
- оба [[undefined]]
- оба [[null]]
- оба `true` или `false`
- обе строки одинаковой длины с одинаковыми символами
- оба один и тот же объект, то есть оба ссылаются на один объект
- оба [[BigInt]] с одинаковым числовым значением
- оба [[Symbol]], которые ссылаются на одно и то же значение
- оба [[Number]]
	- Одинаковое значение, причем `Object.is(-0, +0) === false`, в отличие от обычного сравнения через `==`, `===`
	- Также возвращает `true` при `Object.is(NaN, NaN)`, хотя обычное сравнение возвращает `false` ([[NaN]])
### Синтаксис
```js
Object.is(value1, value2)
```

### Пример
```js
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## Object.keys()
Возвращает массив ключей из объекта

### Синтаксис
```js
Object.keys(obj)
```

### Пример
```js
// Simple array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']

// Strings have indices as enumerable own properties
console.log(Object.keys("foo")); // ['0', '1', '2']

// Other primitives have no own properties
console.log(Object.keys(100)); // []
```

## Object.values()
Возвращает массив значений из объекта

### Синтаксис
```js
Object.values(obj)
```
### Пример
```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']

// Strings have indices as enumerable own properties
console.log(Object.values("foo")); // ['f', 'o', 'o']

// Other primitives have no own properties
console.log(Object.values(100)); // []
```
## Другое
- `Object.defineProperties()`
- `Object.defineProperty()`
- `Object.create()`
- `Object.freeze()`
- `Object.getOwnPropertyDescriptor()`
- `Object.getOwnPropertyDescriptors()`
- `Object.getOwnPropertyNames()`
- `Object.getOwnPropertySymbols()`
- `Object.getPrototypeOf()`
- `Object.groupBy()`
- `Object.hasOwn()`
- `Object.isExtensible()`
- `Object.isFrozen()`
- `Object.isSealed()`
- `Object.preventExtensions()`
- `Object.seal()`
- `Object.setPrototypeOf()`