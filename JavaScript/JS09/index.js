//Function

// function greeting() {
//   console.log("Hello Coder Army,Strike Is coming on 18 october");
//   return 10;
// }

// function addNumber(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
// }

// greeting();
// addNumber(3, 4);
// addNumber(6, 4);

//Rest Operator
// function addNumber(...num) {

//     let sum = 0;
//     for(let n of num){
//         sum=sum+n;
//     }

//   console.log(sum);

// }

// addNumber(6,7);
// addNumber(6,7,5,64,45);
// addNumber(6,7,452,12,12,14);
// addNumber(6,7,12,3,5,4,5,65,45,12,3,5,4,5,65,45);

// console.log(greeting());

//Rest opertor catches the value

// const arr=[10,20,30,40,50];
// const arr2=[30,40,50,120];

// const[first,second,...num]=arr;
// console.log(first,second,num);

//spread operator is used to connvanit the arr whichmeans adding the arr
// const ans =[...arr,...arr2];
// console.log(ans);

//function:expression

// const addNumber =function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(10,20));

//Arrrow Function
// ()=>{

// }

// const addNumber=(num1,num2)=>{
//     return num1+num2;

// }

// let arr =[10,11,19,20,5,4];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// const addNumber = (num1, num2) => num1 + num2;

//if we have singlr parameter,no need of thi()
// const squareNumber = (num) => (num * num);

// console.log(squareNumber(6));

// console.log(addNumber(4, 7));

// const greeting=()=>{
//     return{
//         name:"Vivek",
//         age:20,
//     }
// }

// const greeting=()=>{
//     return{
//         name:"Vivek",
//         age:20,
//     }
// }

// const greeting=()=>({name:"Vivek", age:20,});

// console.log(greeting());


//IIFE
// (function greeting(){
//     console.log("Hello jii");
    
// })();

// (()=>{
//     console.log(`hnji mitro kaise ho`);
    
// })();


//CALLBACK
// function greet(){
//     console.log("Hello Ji,Kaise Ho");
    
// }

// function dance(){
//     console.log("I am going to  dance");
    
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance();//Hardcode kar denge toh reuse nhi kar payenge
//     // greet();
//     callback();
//     console.log("I have finsihed the meeting");
    
// }

// meet(greet);
// meet(dance);

// function blinkitOrderPlaced(){
//     console.log("We have started packing your order");
    
// }

// function ZomatoOrderPlaced(){
//     console.log("We have started preparing your food");
    
// }

// function payment(amount,callback){
//     console.log(`${amount} payment has initialize`);
//     console.log("payment is recived");
//     callback();

//     //GST :Government
//     // Rider ko kitnd dena history
//     // comaony ko kitna dena h
// }

//   payment(500,ZomatoOrderPlaced);
//   payment(300,blinkitOrderPlaced);