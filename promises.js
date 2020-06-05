// let checkNum = new Promise((resolve,rejected)=>{
//     let num1 = 11
//     if (num1 == 10) {
//         resolve('Yes equal')
//     }else{
//         rejected('Not equal')
//     }
// })

// checkNum.then((value)=>{
//     console.log('the result is : ' + value)
// }).catch((e)=>{
//     console.log('the result is : ' + e)
// })



// let myApproved = (x)=>{
//     console.log(x + "Yes")
// }

// let myDenied = (y)=>{
//     console.log(y + "No")
// } 
// let checkMyNum = num =>{
//     return new Promise((resolve,reject)=>{
//         if (num == 12) {
//             resolve("Bravo")
//         }
//         reject('Sorry')
//     })
// }

// checkMyNum(120).then(myApproved , myDenied)



// let checkNum = num2 =>{
// return new Promise((resolve,rejected)=>{ 
//     if (num2 == 10) {
//         resolve('Yes equal')
//     }else{
//         rejected('Not equal')
//     }
// })
// }
 
// checkNum(12).then((value)=>{
//    //  throw new Error() 
//     console.log('the result is : ' + value)
// }).catch((e)=>{
//    // throw new Error() 
//     console.log('the result is : ' + e)
// })


// function resolve(res){
//     console.log("Welcome " + res)
// }
// function rejected(res) {
//     console.log("can not connect to the "+ res)
// }

// Promise.resolve(new Error('Server')).then(resolve, rejected)


 let myNum1 = ()=>{
     return new Promise((resolve,reject)=>{
         resolve('Mynum1')
     })
 }

 let myNum2 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Mynum2')
    })
}
let myNum3 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Mynum3')
    })
}

myNum1().then((myNum1)=>{
    console.log(myNum1)
    return myNum2()
}).then((myNum2)=>{
    console.log(myNum2)
    return myNum3()
}).then((myNum3)=>{
    console.log(myNum3) 
})