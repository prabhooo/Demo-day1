//if else

let mark = 90;
if(mark>=90&&mark<=99){
    console.log("The mark is in 90s");
    
}
else {(mark>=80&&mark<=89)

    console.log("The mark is in 80s");
    
}


//elseIF

let age = 90;
if(age>=90&&age<=99){
    console.log("The age is in 90s");
    
}
else if(age>=80&&age<=89){

    console.log("The age is in 80s");
    
}
else {(age>=70&&age<=79)

    console.log("The age is in 70s");
    
}

//Nested IF

let age1 = 10;
let license = true;
if(age1>=18)
    if(license){
        console.log("you can drive");
}
else{
    console.log("you can't drive");
    
}

//switch statement

let day =3;

switch (day) {
    case 1: console.log("Monday");
      break;
    case 2: console.log("Tuesday");
      break;
    case 3: console.log("Wednesday");
      break;
    case 4: console.log("Friday");
      break;
    default: console.log("invalid day");
      break;
    
}

//Loops
//ForLoop

for (let i = 1; i<=5; i++) {
    console.log(i);
    
}

let a = 5;
while(a<=10){
    console.log(a);
    a++    
}

setTimeout(() => {
    console.log("Prabhu");
    
}, 5000);

//Nested
for (let o = 1; o<=5; o++) {
    for (let p = 1; p<=5; p++)
    console.log(o);
}
// nested in sequence output
for (let o = 1; o<=5; o++) {
    let val = "";
    for (let p = 1; p<=5; p++){
        //for (let p = 1; p<=o; p++){ -- for 1,12,123, output
    val += p;
}
console.log(val);
}

