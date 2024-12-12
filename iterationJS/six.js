//?? Reduce method in JavaScript Practice .

// const myArray=[1,2,3,1,2,1,2,3,4,5,6]
// const totalValue=myArray.reduce(function(acc, curracc){
//     console.log(`acc: ${acc} and curracc: ${curracc}`)
//     return (acc + curracc)
// },1)

// console.log(totalValue)

//?? Using Arrow Function .

// const TotalValue=myArray.reduce((acc,curracc) => {
//     console.log(`Acc: ${acc} and Curracc: ${curracc}`)
//     return (acc +  curracc )
// },1)

// console.log(TotalValue)

const Courses=[
    {
        Course  :'Js Course',
        Price   : 599 
    },
    {
        Course  :'Python Full Stack web development course',
        Price   : 5000
    },
    {
        Course  :'Data Science Course',
        Price   :12999
    },
    {
        Course  :'Prog Language + Internship',
        Price   :8000
    },
]

const priceTopay=Courses.reduce((acc,item) =>(acc+item.Price),0)
console.log(`Total Price : ${priceTopay}`)