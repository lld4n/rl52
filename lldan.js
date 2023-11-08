import fs from "fs"

const throws = [".obsidian", "images", "index.md", "templates", "files"]

function readDirRecursive(path) {
  const files = fs.readdirSync(path)
  const resultObj = {}

  for (const file of files) {
    const filePath = `${path}/${file}`
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      resultObj[file] = readDirRecursive(filePath)
    } else {
      resultObj[file] = file
    }
  }

  return resultObj
}

const folderPath = "./content"
const filesObj = readDirRecursive(folderPath)
console.log(filesObj)
let reslt = "---\ntitle: rl52\n---\n\n> я думал уже скип\n"
for (let key in filesObj) {
  if (!throws.includes(key)) {
    reslt += `# ${key}\n`
    reslt += buffer(filesObj[key])
  }
}

function buffer(obj, level = 2) {
  let answer = ""
  for (let key in obj) {
    if (key !== "index.md") {
      if (typeof obj[key] === "object") {
        answer += getHash(level) + ` ${key}\n` + buffer(obj[key], level + 1)
      } else {
        answer += `- [[${obj[key].replace(".md", "")}]]\n`
      }
    }
  }
  return answer
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
