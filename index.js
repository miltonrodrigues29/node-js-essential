const path = require("path")

let  hello = "Hello World from node JS"

global.console.log(hello)
console.log(__dirname)
console.log(__filename)
console.log(`The file name is ${path.basename(__filename)}`)

// console.log("Hello World");

console.log(process.pid)
console.log(process.version)
console.log(process.argv)
