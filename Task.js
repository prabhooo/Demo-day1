//For loop task from 1 - 5

// for (let p = 1; p<=5; p++)
//  {
//     console.log(p);
    
// }

// //For loop task for printing javascript 5 times
// for( let p=1; p<=5; p++)
// {
//     console.log("Java Script");
    
// }


//Reverse string

let str = "I am Prabhu";
let rev = '';
for (let i = str.length-1; i>=0; i--){
    rev += str[i];
}  
console.log(rev);

//accurance

let str1 = "prabhuuu";
let spl = str1.split('');
let value = spl.reduce((acc,val) =>{
    acc[val] = (acc[val]||0)+1; 
    return acc;
},{})
console.log(value);

// Prime numbers from 1 to 100

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

let primes = [];
for (let num = 1; num <= 100; num++) {
  if (isPrime(num)) {
    primes.push(num);
  }
}

console.log("Prime numbers from 1 to 100:");
console.log(primes);
console.log(`Total: ${primes.length} primes`);

//reverse string

function reverseEachWord(sentence) {
    let result = "";
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];

        if (ch !== " ") {
            // build word
            word += ch;
        } else {
            // reverse current word manually
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }
            result += " ";
            word = "";
        }
    }

    // reverse last word (important!)
    for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
    }

    return result;
}
// Example
console.log(reverseEachWord("HireNexa Technologies"));

