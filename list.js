const fs = require("fs")
console.log('Start')
const files = fs.readdirSync("./uploads");
fs.readdir("./uploads",(err,files)=>
{
    if(err)
    {
        throw err;
    }
    console.log(files)
});
console.log("End")
console.log(files);

