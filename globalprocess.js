// const [, , firstName,lastName] = process.argv

// console.log(process.argv)  //prints data associated with the process
// console.log(`your name ${firstName} ${lastName}`);

const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user  = grab("--user");
console.log(`${greeting} ${user}`);
