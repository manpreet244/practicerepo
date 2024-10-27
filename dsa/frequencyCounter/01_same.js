/* Write a function called same  , which will accept 2 arrays.
* The function should return true if any value in the array
   has its corresponding value squared in the array
* The frequency of the values must be the same.
 * same [1,2,3] ,[9,1,4] //returns true
 * same [1,1,3] ,[1,9,9] //return false
 * same [1,1,3] ,[1,9,1] //return true
*/

//Step 1 Convert arr to obj
function createObj(arr){
  const obj ={};
  //val and count
  for(let val of arr){
    obj[val] = (obj[val] || 0) + 1;
  }  
  return obj;
}
function same(arr1 , arr2){
    const obj1 = createObj(arr1);
    const obj2 = createObj(arr2);
    console.log(obj1)
    console.log(obj2)
  //for loop , which will loop through obj1 and compare with obj2
 
}