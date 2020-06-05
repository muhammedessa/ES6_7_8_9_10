var Person = class{
    constructor(name,age){
        this.name;
        this.age;
    } 
 }

class Employee{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    printInfo(){
      console.log('Name: '+this.name +" Age: "+ this.age)  
    }
}

var newEmployee1 = new Employee('Muhammed',36);
var newEmployee2 = new Employee('Ahmed',22);
var newEmployee3 = new Employee('Khalid',34);


// newEmployee1.printInfo();
// newEmployee2.printInfo();
// newEmployee3.printInfo();

class Student{
    
   static printInfo(){
        console.log('Hello Muhammed')  
      }
}

// var student = new Student();
Student.printInfo();