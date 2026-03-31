//Exection Context
//Memory Allocation
//a=undefined
//b=undefined
//addNumber=fncode
//sumResult1= undefined
//sumResult2=undefined

//Exection Phase
//a=10
//b=20
//addNumber=fncode
//sumResult1= 30
//sumResult2=9

// console.log(a);

// var a = 10;
// var b = 20;
// // console.log(a);

// var sumResult1 = addNumber(a, b);
// function addNumber(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }

// var sumResult2 = addNumber(5, 4);
// console.log(sumResult1, sumResult2);


//let Const
//Memory Allocation
//a=<uninitalized>(Temporal dead zone)
//b=<uninitalized>(Temporal dead zone)
//addNumber=<uninitalized>(Temporal dead zone)
//result=<uninitalized>(Temporal dead zone)

//Exection Phase
//a=10
//b=20
//addNumber=fnCode
//result=30



// let a=10;
// const b=20;
// // console.log(a);

// const addNumber= function(num1,num2){
//     const sum=num1+num2;
//     return sum;

// }

// const result=addNumber(a,b);
// console.log(result);


// // script.js
// var score = 50;
// const playerName = "Alex";

// function calculateBonus(currentScore) {
//     var bonus = currentScore / 10;
//     return bonus;
// }

// var finalScore = score + calculateBonus(score);
// console.log(finalScore);




// You ask the teacher about the student before the lesson starts
console.log(sayHello()); // "Hello!"

function sayHello() {
  return "Hello!";
}
