// function hello(){
//     console.log("Muhammed Essa");
// }

// hello();

// function sum(x,y){
//     var total = x + y;
//     console.log(total);
// }

// sum(1,2)
// sum(3,4)
// sum(6,7)


// function sum(x,y=30){
//     var total = x + y;
//     console.log(total);
// }

// sum(6,1 )


// function printInfo(x,...args){
//     console.log(x+" " + args);
// }

// printInfo(1,2,3,4,5,6,7,8,9);



// function sum(x,y){
//     return x+y;
// }

// var total = sum(2,3);
// console.log(total)
// console.log(total + 2 )

// var name = function() {
//     console.log("Muhammed Essa")
// }
// name();

// setTimeout(function(){
//     console.log("Ahmed Essa")
// },3000);

var sum = new Function('x','y','return x+y');
console.log("Sum: " + sum(1,2))