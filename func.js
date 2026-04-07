//without function
let a = 5;
let b = 10;
console.log(a+b);

let a1 = 10;
let b1 = 20;
console.log(a1+b1);

//Function

function greet(){
    console.log("hello");
}

greet();

//funstion expression

let name = function(){
    console.log("bhu");
    
}
name();

//function with return type

let add = function(a,b){
    return a+b;
}
console.log(add(10,20));
add();

//Arrow func - shortcut to function expression

let name1 = () => console.log("prabhu");
name1();

//example 2
let mul = (a,b) => a*b;
console.log(mul(10,30));


