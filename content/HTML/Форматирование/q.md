---
title: <q>
date: 2023-11-27
---
#строчный

Этот тег пригодится, когда нужно встроить цитату в текст. Если цитата большая и состоит из нескольких предложений или абзацев, нужно использовать [[blockquote]]

Прямо внутри абзаца между открывающим и закрывающим тегом `<q>` вставляем слова, которые хотим процитировать.

При этом тег добавляет кавычки вокруг цитируемой части предложения. Внешним видом кавычек можно управлять при помощи CSS-свойства [[quotes]]

По аналогии с [[blockquote]] можно указать источник с помощью атрибута `cite` или отдельного тега [[cite]]

Вокруг цитируемого текста добавляются кавычки. Вид кавычек зависит от языка документа, указанного в атрибуте `lang`. Если цитата на другом языке, чем сам сайт, то можно использовать атрибут `lang` для указания языка

```html
<p>
  В Японии принято обозначать звук, произносимый кошкой как
  <q lang="ja-latn">nyan</q>
</p>
```