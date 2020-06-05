//var ages = [1,2,3,4,5,6,7]
//var ages = new Array(8)
// var ages = new Array(1,2,3,4)
// for (let index = 0; index < ages.length; index++) {
//     console.log( ages[index] );
    
// }
// console.log(ages[0])
// console.log(ages[1])
// console.log(ages[2])

// var myAarray = [[1,2,3],[4,5,6]];
// console.log(myAarray[0][0])
// console.log(myAarray[0][1])
// console.log(myAarray[0][2])
// console.log(myAarray[1][0])
// console.log(myAarray[1][1])
// console.log(myAarray[1][2])

// var names = new Array("muhammed","Essa","Hameed","Hassan") ;
// function printArray(names) {
//     for (let index = 0; index < names.length; index++) {
//        console.log(names[index])  ;
        
//     }
// }
// printArray(names)

function printArray() {
    return new Array("Ali","Usama","Hameed","Hassan");
}

var myNames = printArray() ;

for (const key in myNames) {
    console.log(myNames[key])  ;
}