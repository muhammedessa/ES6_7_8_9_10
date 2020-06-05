// var myMap = new Map();
// myMap.set('username','Essa')
// myMap.set('password','123456')
// myMap.set('3','Hassan')
// myMap.set('4','ALi')

// console.log(myMap.size);

var names = new Map([
['1','Muhammed'],['2','Ahmed'],['3','Yousif']
]);
// var namesValues = names.values();
// console.log(namesValues.next().value)
// console.log(namesValues.next().value)
// console.log(namesValues.next().value)
// var namesValues = names.entries();
// console.log(namesValues.next().value )
// console.log(namesValues.next().value )
// console.log(namesValues.next().value )
var namesValues = names.keys();
console.log(namesValues.next() )
console.log(namesValues.next() )
console.log(namesValues.next() )