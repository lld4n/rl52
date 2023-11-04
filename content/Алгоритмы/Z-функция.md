---
title: Z-функция
date: 2023-11-04
---
#подстрока #строка

## Определение
Внезапно советский аналог [[Префикс-функция|префикс-функции]]. **Z-функция** - это массив, где `z[i]` равно наибольшей длине префикса, равного подстроке, начинающейся в `i`. Например для строки `abacabab` массив будет выглядеть так `[0,0,1,0,3,0,2,0]`

## Простой алгоритм
```ts
function z_function(s: string) {  
  const z = new Array(s.length).fill(0);  
  for (let i = 1; i < s.length; i++) {  
    while (i + z[i] < s.length && s[z[i]] === s[i + z[i]]) {  
      z[i]++;  
    }  
  }  
  return z;  
}
```

> Выполняется за `O(n^2)`

## Улучшение
```js
function good_z_function(s: string) {  
  const z = new Array(s.length).fill(0);  
  let l = 0;  
  let r = 0;  
  for (let i = 1; i < s.length; i++) {  
    if (i < r) {  
      z[i] = Math.min(r - i, z[i - l]); 
    } else {  
      let k = 0;  
      let j = i;  
      while (j < s.length && s[j] === s[k]) {  
        k++;  
        j++;  
      }  
      z[i] = k;
      if (j > r) {
	      l = i;  
	      r = j; 
      }  
    }  
  }  
  return z;  
}
```

> Выполняется за `O(n)`

Почему-то на сайте [Алгоритмика](https://ru.algorithmica.org/cs/string-searching/z-function/) описана другая Z-функция, но разобранная в [видосе](https://www.youtube.com/watch?v=yxvCN2RGa4k) по-моему выглядит гораздо лучше.