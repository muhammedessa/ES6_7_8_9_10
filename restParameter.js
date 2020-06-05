function printInfo(...args){
    let total = 0;
    for(let i of args){
        total +=i;
    }
    console.log("Total :" + total);
}
printInfo(1,2,3,4,5,6,7);
console.log('-------------------');
var names = ['Muhammed', 'Essa','Hameed','Yousif','Taha']
var[x,y,...args] = names
console.log("X :" + x);
console.log("Y :" + y);
console.log("Args :" + args);

console.log('-------------------');

var numbers = new Function('...args','return args');
console.log(numbers(1,2,3,4));