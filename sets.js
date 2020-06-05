// let names = new Set(['Muhammed','Essa','Hameed']);
// console.log(names)
// console.log(names.size)

//  names.add('Hassan');
//  names.add('Ali');
//  names.add('Omer');

//  console.log(names)
// console.log(names.size)

// names.delete('Omer');

// console.log(names)
// console.log(names.size)


// names.clear();

// console.log(names)
// console.log(names.size)


// let names = new Set(['Muhammed','Essa','Hameed']);
//  names.add('Hassan');
//  names.add('Ali');
//  names.add('Omer');

 //var emplyeesName = names.entries();
//  for (let index = 0; index < names.size; index++) {
//      console.log(emplyeesName.next().value ) ;
     
//  }
// function setInfo(params) {
//     console.log(params ) ;
// }

// names.forEach(setInfo);

// console.log(names.has('Muhammed') ) ;
// console.log(names.has('Ghassan') ) ;
// console.log(names.has('Hassan') ) ;

// var emplyeesName = names.values();
// console.log(emplyeesName.next().value)
// console.log(emplyeesName.next().value)
// console.log(emplyeesName.next().value)
// console.log(emplyeesName.next().value)
// console.log(emplyeesName.next().value)
// console.log(emplyeesName.next().value)




let names = new Set(['Muhammed','Essa','Hameed']);
 names.add('Hassan');
 names.add('Ali');
 names.add('Omer');

 var namesKeys = names.keys();
 var namesVlues = names.values();
 var namesEntries = names.entries();

 console.log(namesKeys.next().value);
 console.log(namesVlues.next().value);
 console.log(namesEntries.next().value);
