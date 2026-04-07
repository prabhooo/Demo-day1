//callback -> calling a function inside another function with  its parameter
//function f1(Callback) {
  //  console.log("This is function 1");
    //Callback();    
    
//}
//function f2() {
  //  console.log("This is function 2");
//}
//f1(f2);

//callback hell

function f1(Callback) {
    console.log("This is function 1");
    Callback();    
    
}
function f2(Callback) {
    console.log("This is function 2");
    Callback();    
    
}
function f3(Callback) {
    console.log("This is function 3");
    Callback();    
    
}
function f4() {
    console.log("This is function 4");
}
f1(()=>{ //use arrow function to get the output
    f2(()=>{
        f3(()=>{
            f4()
        })
    })
});

//promise -> to handle asynchronous operation
// //syntax: new promise (resolve,reject)

// let Promise = new Promise((resolve,reject)=>{
//     let status = "Pass";
//     if (status === pass) {
//         console.log("Solved");
//         resolve();        
        
//     }else{
//         console.log("rejected");
//         reject();
        
//     }
// })
// Promise.then()
// .catch();

//function pr1() {
 //   return new promise(resolve() => {
 ///       resolve('p')
 //   })
//}

//////////////////////////////doubt

//promise.all
let p1 = new Promise(resolve => resolve('function 1'))
let p2 = new Promise(resolve => resolve('function 2'))
let p3 = new Promise(resolve => resolve('function 3'))

Promise.all[p1.then(res => console.log(res)),
            p2.then(res => console.log(res)),
            p3.then(res => console.log(res))];


   //async -> it is a function to handle asynchrinous operation
//aysnc function (){} or async ()=> {}
    //await -> keyword  -> it will return promise

    async function Name(params){
        await console.log('');
        
    }
    async(params)=> {
        await console.log('');
        
    }