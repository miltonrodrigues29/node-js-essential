const path = require("path")
const { log } = require("util")
const { getHeapStatistics } = require("v8")
log(getHeapStatistics())
// console.log(__filename)
log(path.basename(__filename));
log("^ The name of the current file");
const dirPictures = path.join(__dirname,"uploads","pictures");
console.log(dirPictures)