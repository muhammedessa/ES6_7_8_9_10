// let myName = Array.from("Muhammed") ;
// console.log(myName);

// let myName = Array.of(7) ;
// console.log(myName);
// console.log(myName.length);


// let ages =  [14,33,44,55,56,21]  ;
// var findMyValue = ages.find(x => x >19);
// console.log(findMyValue); 


// let ages =  [14,33,44,55,56,21]  ;
// var findMyValue = ages.findIndex(x => x >19);
// console.log(findMyValue); 

// let ages =  [14,33,44,55,56,21]  ;
// var findMyValue = ages.entries();

// for (const iterator of findMyValue) {
//     console.log(iterator);   
// }

//let names =  ['Muhammed','Osama','Ali','Ahmed' ]  ;
//var findMyValue2 = names.entries();
//console.log(...findMyValue2);   
// for (const iterator of findMyValue2) {
//     console.log(iterator);   
// }

// let names =  ['Muhammed','Osama','Ali','Ahmed' ]  ;
// var myKeys = names.keys();
// console.log(...myKeys)
// var myValues = names.values();
// console.log(...myValues)

//let names =  ['Muhammed','Osama','Ali','Ahmed' ]  ;

// var newNames = names.fill("Ghassan" )
// console.log(...newNames)
// var newNames = names.fill("Ghassan",2,4 )
// console.log(...newNames)


//let names =  ['Muhammed','Osama','Ali','Ahmed','Hassan']  ;
//var [first,second,third] = names;
// var [name1,,name2,,name3] = names;
// console.log(name1)
// console.log(name2)
// console.log(name3)

// let names =  ['Muhammed','Osama','Ali','Ahmed','Hassan']  ;
// var [first,second,...args] = names;
// console.log(first)
// console.log(second)
// console.log(args)

// var name1 ,name2;
// [name1="Muhammed", name2="Ahmed"] = ["Ali"];
// console.log(name1)
// console.log(name2)




// var name1="Muhammed" ,name2="Ahmed";

// [name1,name2]=[name2,name1]   ;
// console.log(name1)
// console.log(name2)


function array() {
    return ['Muhammed','Osama','Ali','Ahmed','Hassan'];
}

var [a,b,c] = array() 
console.log(a)
console.log(b)
console.log(c)



