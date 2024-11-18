//  Premitive 

//  7 types : String,Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is the Dynamically type language. 
/*
//Premitive datatype.
const score=100
const scoreValue=100.6

const isLoggedIn=false
const outSideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')
*/
// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId)
// console.log(id)
// console.log(anotherId)


// let x =1999999937637356546999n
// console.log(typeof x)   //BigInt Data type.

// Reference (Non primitive )
// Array, Objects, Function
// let lst=[1,2,3,4,'Rahul',5,6,7]
// console.log(lst)

// let dict={
//     name:'Parwez',
//     age:45,
//     hometown:'Bihar'
// }

//************************************Memory work in JavaScript******************************
/*
There are two way to memory management in javascript 
1. Stack( Premitive Dataype):
--> Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable. JavaScript supports the following primitive data types:
2. Heap(Non- Premitive Datatpe):
-->Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. The two key non-primitive data types in JavaScript ar
*/
// Stack work layer by layer. 
// let myName='Parwez Alam'
// let newName=myName
// newName='Salman ali'

// console.log(myName)
// console.log(newName) // valeu wont be change becouse of the they giving data as conpy of them.

//Heap Non-Premitive data type.
// Whatever data chnaged in the duringthe execution it will chnage in the main collection.

// let arr=[1,2,3,5,6,7]
// console.log(arr)
// //Array[index]=newvalue
// arr[3]=10
// console.log(arr)


// data={
//     name:'Parwez alam',
//     age:34,
//     hometown:'Biwandi',
//     mobile: 9322672564
// }

// console.log(data.name='Parwez')
// console.log(data)

//****************************************String in JavaScript***********************************
// let name='ParwezAlam'
// let repocount=80

// console.log(`My Game Name is ${name} and those Count is ${repocount}`)

// console.log(name.fontcolor())
// console.log(name.bold())
// console.log(name.slice(2,6))
// console.log(name.charAt(4))
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.substring(0,4))

// All follow we can access the function in javaScript. 

// let gameName=New String 

// let MyString='   Test String  :!'

// console.log(MyString)
// console.log(MyString.trim()) //trim is used to remove white space from the given string.
// console.log(MyString.length)
// console.log(MyString.trimStart())


// let url='https://effective-train-7vvrj9qgwj7cpx9q.github.dev/'
// console.log(url.includes('6','7'))

let GameOver='My-Name-Is-Parwez-Alam'
// console.log(GameOver.split('n'))
console.log('N' in 'My-Name-Is-Parwez-Alam')

// if (GameOver == 'my-name-is-parwez-alam')
//     {
//     console.log('True')
//     }
// else{
//     console.log('Not True.')
//     }

