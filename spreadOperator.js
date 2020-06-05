let names = ['Muhammed', 'Essa', 'Hameed'];
let employeesName = [ ...names ,'Ahmed', 'Hassan'];

let names2 = ['Waleed','Othman'];
let names3 = [...names];

let name4 = ['ali','Omer']
let names5 = name4
names5.push('Usama');

console.log(name4);
console.log(names5);
console.log('-------------');

let name6 = ['ali','Omer']
let names7 = [...name6]
names7.push('Usama');
console.log(name6);
console.log(names7);
console.log('-------------');
let name8 = ['a','b','c', ...'Omer']
console.log(name8);