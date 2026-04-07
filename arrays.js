//arrays are non primitive datatype
//Array - multiple valuves in single variable
//array should be in square brackets []

let arr = [22,45,66,345,21,55];
//Array methods
//Push() -  add value in the end

arr.push(99);
console.log(arr);

//pop() - removes the value
arr.pop(99);
console.log(arr);

//unshift() - adds value in the front

arr. unshift(123);
console.log(arr);

//shift() - removes value in the front

arr. shift(123);
console.log(arr);

//slice() - gves sub array

let sl = arr.slice(1,3);
console.log(sl);

//Splice - to remove and add values
//1.starting index,2.delete count

//slice will not change the original array but splice will change the original array

let spl = arr.splice(4,5,44,33,55); // delete and add same time delete with indexnumber
console.log(arr);

//reverse () - reverse array
console.log(arr.reverse());

//sort() - ascending or decednding
let str = ["prabhu","vicky","mugi","john","prasha"];
console.log(str.sort());
console.log(arr.sort()); //sort in numbers will be done in (1,123,124,211,212,3,4) first number second number (example 11,111,112,211,212,222)

console.log(arr.sort((a,b)=>a-b));// sort in normal ascending order

//string reverse

let str1 = "Prabhu";
//let rev = str1.split('').reverse().join('');
//console.log(rev);

let result ='';
for(i=str1.length-1; i>=0; i--){;
result += str1[i];
//console.log(str1(i));
}
console.log(result);

//palindrome

let str2 = "lol"
let rev1 = str2.split('').reverse().join('');

if(str2 === rev1){
console.log(`${str2}'is a palindrome`);
}
else{
    console.log(`${str2}'is not a palindrome`);
}


