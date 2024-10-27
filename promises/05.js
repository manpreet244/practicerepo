/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

const p1 = new Promise((resolve , rej)=>{
    setTimeout(()=>{
        resolve(10);
    },3000)
})
const p2 = new Promise((resolve , rej)=>{
    setTimeout(()=>{
        resolve(20);
    },5000)
})
//in an array[p1,p2]
Promise.all([p1, p2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
//below will tell status , fulfilled , rejected
//it will also go to then block wether it is rehected or resolved
Promise.allSettled([p1 , p2])
.then((res)=>{
    console.log(res)
})
//any is settled as soon as any of the promises is fulfilled
// any:if any of the promise is fulfilled it will go to then block , else catch block
Promise.any([p1,p2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

//race:whoever comes first , whether fulfiled or rejected will take precedence
Promise.race([p1,p2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
