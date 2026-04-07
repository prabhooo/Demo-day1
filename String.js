//String method
let str = "i am Prabhu";
//How to find the length of the string
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//charAt() gives the charcter of nthe speecific index
console.log(str.charAt(3));
//indexof() gives the index of nthe speecific charcter
console.log(str.indexOf("b"));
//lastindexof() gives the index of nthe speecific charcter
console.log(str.lastIndexOf("u"));
//Includes() - return true if my string has value -- if continuity misses it will return false 
console.log(str.includes("Prabhu"));

//startwith() == return true or false
console.log(str.startsWith("p"));
//endwith() == return true or false
console.log(str.endsWith("u"));
//replace() ==  replace a charc or string
console.log(str.replace("u", "i"));
//replaceall()== replace all the character or string
console.log(str.replaceAll("u", "i"));
//repeat() == repeats our string
console.log(str.repeat(2));
//substring - saves a part of the string in one variable
let str1 = str.substring(5,8);
console.log(str1);
//slice() save a part if the string in one variable
let str2 = str.slice(3);
console.log(str2);

//concat --- combine two string
let con = str . concat(str1);
console.log(con
    );

//split() -- split the string based on regular expression(regex)
let spl = str.split("a"); // you can also give empty string
console.log(spl);


