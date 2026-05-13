//Prime 
let num = 7;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log("Not a prime number");
        break;
    }  
}
if (i === num) {
    console.log("Prime number");
}