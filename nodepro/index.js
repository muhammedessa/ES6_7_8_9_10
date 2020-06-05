//import {hello, goodBye } from './user.js' 
import * as user from './user.js' 
import {mobileName as mn,Mobile as m} from './mobile.js'

import Product from './product.js'


import {database as db} from './database'

let myNameIs = new Product('Salim')
myNameIs.priceProduct()


user.hello('Muhammed')
user.goodBye('Emad')
user.name('Hassan')

mn()
db()
let mobileNo = new m()
mobileNo.mobileNo()


// console.log( 2**2 )
// console.log( 2**10 )

async function myNumbers() {
    return 11+5;
}

myNumbers().then(console.log('Async'))



// async function myNumbers2() {
//    let myCheck = new Promise((resolve,reject)=>{
//        setTimeout(()=> resolve("resolve Done"),3000)
//    });
//    let myTime = await myCheck ;
//    console.log(myTime)
// }
// myNumbers2()


// console.log( 'ali'.padStart(12,'Muhammed ')  )
// console.log( 'ali'.padEnd(12,' Muhammed')  )

// let names = ['muhammed', 'ahmed', 'ali','usama']
// async function name(names1) {
//     for await (const iterator of names1) {
//         console.log(iterator);
//     }
// }

// name(names)


// let myPromise = new Promise((resolve,reject)=>{
//     let num1 = 110;
//     if (num1 ==10) {
//         resolve("Yes equal")
//     } else {
//         reject("Not equal")
//     }
// })

// myPromise.then((res)=>{
//     console.log("the result is: " + res)
// }).catch((e)=>{
//     console.log("the result is: " + e)
// }).finally(()=>{
//     console.log("finally "  )
// })



// var myArray = [1,2,[3,4]] 
// console.log( myArray.flat() )

// var myArray1 = [1,2,[3,4,[5,6]]] 
// console.log( myArray1.flat() )

// var myArray2 = [1,2,,,, 3,4, 5,6 ] 
// console.log( myArray2.flat() )
 

var tArray = [1,2,3,4,5,6];
let mArray = tArray.map(x => [x *3 ] )
console.log(mArray )

console.log( mArray.flatMap(x => [x *3 ])  )

let firstname = "     Muhammed Essa"

console.log(firstname.trimStart() )

let lastname = "Muhammed Essa     "
console.log(lastname.trimEnd() )

const myMap = new Map([['username','muhammed'],['password','12345']])
const myMuhammed = Object.fromEntries(myMap)
console.log(myMuhammed )
console.log('---------------------------' )
const aArray =  [['username','muhammed'],['password','12345']]
const essa = Object.fromEntries(aArray)
console.log(essa )