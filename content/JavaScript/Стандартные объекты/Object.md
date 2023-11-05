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
new Object(value)

Object()
Object(value)
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
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)
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

## Object.create()

