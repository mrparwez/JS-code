// const arr = [1, 2, 3, 4, 5, 7, 5, 6, 7, 8];
// const arr1 = [];
// for (const itr of arr) {
//     if (arr1.includes(itr)) { // Use includes() to check if arr1 contains the element
//         continue; // Skip the iteration if the element is already present
//     }
//     console.log(itr); // Log the unique element
//     arr1.push(itr); // Add the element to arr1 to keep track
// }
// console.log(arr1)

arr=[1,2,3,4,1,2,1,3,4,]
newArr=[]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let i=0; i<arr.lenght; i++){
//     if (newArr.includes(arr)){
//         continue
//     } 
//     console.log(i)
//     newArr.push(i)
// }
// console.log(newArr)

// for (const element of object) {
    
// }


const map1= new Map()
map1.set('IN','India')
map1.set('USA','United States of America')
map1.set('FR','France')
map1.set('IN','India')      //So basically Key sould be unique and value can be duplicate.
map1.set('IND','India')

console.log(map1);
