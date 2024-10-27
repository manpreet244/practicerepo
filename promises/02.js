//Print "Program started at the stat of the code
//Create a promise that resolve after 3 sec.
//3 Log out the promise while its pending
//4 Print out "Program in progress... as well"

console.log("Program started");
const p = new Promise((resolve , reject) => {
    setTimeout(()=>{
        resolve;
 },3000 );
});
console.log(p1);
p1.then