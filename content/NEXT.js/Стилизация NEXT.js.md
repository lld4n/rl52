---
title: Стилизация NEXT.js
date: 2023-11-14
---
## Определение
NEXT.js поддерживает различные способы стилизации
- CSS
- CSS modules
- Tailwind CSS
- SASS
- CSS-in-JS

## CSS modules
Модули CSS локально определяют CSS, автоматически создавая уникальное имя класса. Это позволяет вам использовать одно и то же имя класса в разных файлах, не беспокоясь о коллизиях. Такое поведение делает CSS-модули идеальным способом включения CSS на уровне компонентов

Модули можно импортировать в любой файл внутри `app`
```ts
import styles from './styles.module.css'
 
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.dashboard}>{children}</section>
}
```

В рабочей среде все файлы модулей CSS будут автоматически объединены во множество минимизированных файлов и файлов с разделением кода

## SASS 
Для начала необходимо установить `sass` с помощью команды 
```
yarn add --dev sass
```

Для настройки параметров SASS можно использовать `next.config.js`
```js
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```