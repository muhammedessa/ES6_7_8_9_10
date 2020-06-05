// let fisrName = 'Muhammed'
// let lastName = 'Essa'
// let age = 36
// let salary = 'employeeSalary'

// let person = {
//     fisrName,
//     lastName,
//     age,
//     [salary]:3000.3,
//     fullName(){
//         return this.fisrName +" "+ this.lastName;
//     }
// }
// console.log(person  )
// console.log(person.fisrName)
// console.log(person.lastName)
// console.log(person.age)

// var names = { 1:'Muhammed', 2:'Essa' };
// var names2 = { 3:'Ahmed', 4: 'Ali' };
// var names3 = { 5:'Khalid',6: 'Osama' };

// var totalNames = Object.assign(names,names2,names3);
// console.log(totalNames)

// let personInfo = {
//     name: 'Muhammed',
//     lastName: 'Hameed',
//     age:36,
//     salary:3000
// }

// let personInfo2 = Object.assign({} ,personInfo )
// personInfo2.name = 'Ahmed'
// console.log(personInfo2);





// var name = {1:"Muhammed" , 2:"Ahmed"}
// var name2 = {3:"Ahmed" , 4:"Hassan"}
// var name3 = {5:"Usama" , 6:"Waleed"}

// var totalNames = {...name, ...name2 , ...name3}
// console.log(totalNames);
 

// var names = new Object;
// names.x = 'Muhammed';
// names.y = 'Essa';

// delete names.y
// console.log(names )

// let employee = 
// {name:'Muhammed',age:36,department:'JS Developer'}
// let{name , age , department} = employee
// console.log(name)
// console.log(age)
// console.log(department)


// let {age1 = 33 , salary1 = 3000} = { age1 : 36}
// console.log(age1)
// console.log(salary1)

// let myInfo = {age2 : 33 , salary2 : 3000} 

// let {age2:ages , salary2 : salaries} = myInfo
// console.log(ages)
// console.log(salaries)




// let fistName , lastName;
// ({fistName , lastName} = {fistName:'Muhammed',lastName:'Essa'})

// console.log(fistName)
// console.log(lastName)



// let{x,y,...args} = {x:10,y:20,z:30,u:40,s:33,t:88}
// console.log(x)
// console.log(y)
// console.log(args)

let{num1:number1=10,num2:number2=20 } = {num1:30}
console.log(number1)
console.log(number2)









