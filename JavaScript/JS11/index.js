// //Scope and Closure,HOF
// //Global =>Accesiable to everyone.
// //Functional => Acessiable only to that function
// //Block Level => Acessiable only to that Block
// //Var Block ko respect ni deta h
// let a = 10;
// const b = 20;

// if (true) {
//   let d = 35;

//   //   console.log(d);
// }

// //  console.log(d);

// function greet() {
//   let z = 120;
//   //     console.log(z);

//   //   console.log(a);
//   var e = 13;
// }
// // console.log(e);
// greet();

// let Global = 30;

// function greet() {
//   let Global = 40;
//   function meet() {
//     let Global = 10;
//     console.log(Global);
//   }
//   meet();
// }

// greet();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     // console.log(`I am increment function`);
//     count++;
//     return count;
//   }
//   return increment;
// }

// const counter = createCounter();
// // console.log(count);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let balance = 500;

// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }

// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na

// function createBankAccount(){

//     let balance = 500;

//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }

//     }

// }

// const customer = createBankAccount();
// console.log(customer.withdraw(200));


//HOF=Higher Order Function

// function double(){
//     function execute(){
//         console.log("Hello Ji");
        
//     }
//     return execute;
// }

// const n= double();
// n();


function double(value){
     return function execute(num){
       
        return num*value;
    }
  
}

// const n= double(20);
const n= double(20)(5);
 console.log(n);
  