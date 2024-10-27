document.querySelector("#grandparent").addEventListener(
    "click",
    () =>{
        console.log("Grandparent is called");
    }
    ,false 
)
//false is bubbling
//true is capturing
document.querySelector("#parent").addEventListener(
    "click",
    () =>{
        console.log("Parent is called");
    } ,true
)
document.querySelector("#child").addEventListener(
    "click",
    () =>{
        console.log("Child is called");
    } // isCaptured
    ,true
)
// cap-bub flow
// gp-p-c-c-p-gp

// G- true
// P -false
// C-true
// Ans -> G- C- P