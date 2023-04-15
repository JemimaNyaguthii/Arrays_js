
// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const arr3 =[-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
var arr1= arr3.sort((a,b)=> a-b)
console.log(arr1)

const nums=[4,-1,7,9,-5,4,3];
var arr= nums.sort()
console.log(arr)

// Write a function JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];

function arrays(arr5){
  if(arr5.includes(4)){
    console.log("4 is found")
  }
  else{
    console.log("the search is not found")
  }
}
let arr5=["the","way","x",4,23];
arrays(arr5)

// Write a function that accepts an array of numbers and uses the 
// forEach() method to console.log each number multiplied by 2.
function multiply(num){
  num.forEach(num =>{
    console.log(num*2)
  })
}
let num=[12,34,2,7,17,6];
multiply(num)


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
function duplicates(arr){
  return [...new Set(arr)]
}
var arr = ["red", "blue", "orange","orange", "red", "purple"];
console.log(duplicates(arr))

// Write a JS program that will join the following array elements into a string
// var a =["pets","cats","dogs"]
// The elements of the string will be separated by a specified separator which (,)
var a=["pets","cats","dogs"];
console.log(a.join());

