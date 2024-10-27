/*
1. Print out "Program Started" at the start of your code.
2. Create a Promise that resolves after 3 seconds.
3. Log out the promise while its pending.
4. Print out "Program in progress ..." as well.
5. Print out "Program complete" when the promise completes after 3 seconds.

	HINT: Use setTimeout for the delay.*/
    console.log("Program Started")
const p = new Promise((resolve , reject)=>{
    setTimeout(() => {
    resolve();
    }, 3000)
    })
    console.log(p);
    console.log("Program Pending")

console.log(p)
p.then(() => {
    console.log("Program completed");
}).catch((err)=>{
    console.log(err)
});
p.then(() => {
    console.log("Program completed 2");
});