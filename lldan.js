import fs from "fs"
import { type } from "os"

const throws = [".obsidian", "images", "index.md", "templates", "files"]

function red(path) {
  const files = fs.readdirSync(path)
  let result = []
  for (const file of files) {
    const filePath = `${path}/${file}`
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      result.push({
        title: file,
        items: red(filePath),
      })
    } else {
      result.push(file)
    }
  }
  return result
}

const folderPath = "./content"
const filesObj = sortItems(red(folderPath))

function sortItems(array) {
  const isString = (item) => typeof item === "string"

  const sortObjectItems = (obj) => {
    obj.items.sort((a, b) => {
      if (isString(a) && isString(b)) {
        return a.localeCompare(b) // Сортировка строк
      }
      if (isString(a)) {
        return -1 // Строки идут первыми
      }
      if (isString(b)) {
        return 1 // Строки идут первыми
      }
      return 0 // Если оба элемента объекты
    })
  }

  // Сортировка верхнего уровня
  array.sort((a, b) => {
    if (isString(a) && isString(b)) {
      return a.localeCompare(b) // Сортировка строк
    }
    if (isString(a)) {
      return -1 // Строки идут первыми
    }
    if (isString(b)) {
      return 1 // Строки идут первыми
    }
    return 0 // Если оба элемента объекты
  })

  // Сортировка items в каждом объекте
  array.forEach((obj) => {
    if (obj.items && Array.isArray(obj.items)) {
      sortObjectItems(obj)
    }
  })

  return array
}

fs.writeFileSync("./lldan.json", JSON.stringify(filesObj, null, 2))

let reslt = "---\ntitle: rl52\n---\n\n> я только начал\n"
fillMd(filesObj)
function fillMd(array, level = 1) {
  for (let el of array) {
    if (typeof el === "string") {
      if (el !== "index.md") {
        reslt += "- [[" + el.replace(".md", "").trim() + "]]\n"
      }
    } else {
      if (!throws.includes(el.title)) {
        reslt += getHash(level) + " " + el.title + "\n"
        fillMd(el.items, level + 1)
      }
    }
  }
}

function getHash(level) {
  if (level === 1) {
    return "#"
  } else if (level === 2) {
    return "##"
  } else if (level === 3) {
    return "###"
  } else if (level === 4) {
    return "####"
  } else if (level === 5) {
    return "#####"
  }
  return "######"
}

fs.writeFileSync("./content/index.md", reslt)
