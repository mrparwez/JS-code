//  Premitive 

//  7 types : String,Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is the Dynamically type language. 
/*
const score=100
const scoreValue=100.6

const isLoggedIn=false
const outSideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')
*/
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)
console.log(id)
console.log(anotherId)
// Reference (Non primitive )

let x =1999999937637356546999n
console.log(typeof x)   //BigInt Data type.


// Array, Objects, Function
let lst=[1,2,3,4,'Rahul',5,6,7]
console.log(lst)

let dict={
    name:'Parwez',
    age:45,
    hometown:'Bihar'
