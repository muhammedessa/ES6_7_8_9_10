class Employee{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    read(){
        console.log( "Class Employee")
    }
}
class Student extends Employee{
printData(){
    console.log("Name:" + this.name + " Age: "+this.age)
}
studentInfo(){
    console.log("Class Student")
}
}

class User extends Student{
    userInfo(){
        console.log("Class User")
    }
    studentInfo(){
        super.studentInfo()
        console.log("overriding Class Student")
    }
}

var user = new User()
user.read();
user.studentInfo();
user.userInfo();