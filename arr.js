//map -> transform the array 
let arr = [1,2,3,4,5];
let m = arr.map(num => num+1);
console.log(m);

let prices = ['$400','$30','$455','$23'];
let rep1 = prices.map((val) => Number(val.replace("$","")))
console.log(rep1);

//reverse words without chnaguing the 
let word = "My name is prabhu";
let rev = word.split(" ").map((val) => val.split('').reverse().join('')).join(' ');
console.log(rev);

//filter() -> get the value from array based on conditions

let arr1 = [1,334,45,332,33,221,55];
let f1 = arr1.filter((num) => num%3 ===0);
console.log(f1);

//reduce() = > reducing the array

let arr2 = [1,2,3,4,5];
let red = arr2.reduce((Acc,val)=> Acc+val,0);
console.log(red);

//accurance

let str = "prabhuu";
let spl = str.split('');
let value = spl.reduce((acc,val) =>{
    acc[val] = (acc[val]||0)+1; 
    return acc;
},{})
console.log(value); //{ p: 1, r: 1, a: 1, b: 1, h: 1, u: 2 } en u la 2 iruku nah first u ku 1 value again second u ku 2 value nu add aagum

//object =  collection of keys and values

let obj = {
    Name : "Prabhu",
    age : 24,
    role : "tester",

};
console.log(obj.Name);

obj.Name = "prashant" //update the value
console.log(obj);

//delete obj.Name; // dalete a value
//console.log(obj);

//for in loop
for (const key in obj){
    console.log(key, obj[key]); //obj[key] is key oda object and const key in object mean object oda key varaible(ex: name age role)
    
}

//For each => array

arr1.forEach((val,index)=>{
    console.log(val,index);
    
})

//for of - string.object

for(const e of word){
    console.log(e);
    
}



