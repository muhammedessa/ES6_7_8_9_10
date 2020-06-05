// function *myNames(){
//     yield 1;
//     yield 2;
// }

// function*myNames(){
//     yield 1;
//     yield 2;
// }

// function* myNames(){
//     yield 1; 
//     yield 2;
//     yield 3;
// }

// var names = myNames();
// console.log(names.next().value );
// console.log(names.next().value ); 
// console.log(names.next().value ); 


function* employeesNames(){
yield 'Muhammed Essa';
yield 'Ahmed Osama';
return 'return statement'
yield 'Khalid bin walid';
}

let empNames = employeesNames();
console.log(empNames.next()  );
console.log(empNames.next() ); 
console.log(empNames.next()  ); 
console.log(empNames.next()  ); 