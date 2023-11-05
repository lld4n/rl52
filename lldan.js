import fs from "fs";

const throws = [".obsidian", "images", "index.md", "templates"]
const dirs = fs.readdirSync("./content");
let result = "---\ntitle: rl52\n---\n\n# Дорогая грусть, прости, не вернусь\n\n> я думал уже скип\n\n"
for (let el of dirs) {
  if (!throws.includes(el)) {
    const dir = fs.readdirSync("./content/" + el).filter(el => el !== "index.md")
    result += `- [[${el}]]\n`
  }
}
fs.writeFileSync("./content/index.md", result)