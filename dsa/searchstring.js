// Count number of times a substring appears in a string
function searchString(long , short){
    let count = 0;
    let arr = [] ;
for(let i =0 ;i<long.length;i++){
    for(let j =0 ; j<short.length; j++){
      if(short[j] !== long[i+j]){
        break;
      }
       if(j ===  short.length - 1){
        count++;
        arr.push(i);
       }
    }
}
}
searchString("Hello world el" ,"el")