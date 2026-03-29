//Object
//Key Value Pair

// const user ={
//     name:"Vivek",
//     "age":24,
//     emailId:"Yadav@gamil.com",
//     amount: 3400,
//     "home address":"delhi"
// }

// console.log(user['name']);
// // console.log(user.age);
// console.log(user.age);
// console.log(user["home address"]);

// console.log(user);
//CRUD:crete,read,update,delete

// console.log(user.age);

// //update
// user.aadhar =12545;
// user.amount =50000;

// console.log(user);

// //delete
// delete user.emailId;
// console.log(user);

// const user = {
//   name: "Vivek",
//   age: 24,
//   emailId: "Yadav@gamil.com",
//   amount: 3400,
// };

// const user2 = user;
// user2.age=90;
// user.adhar=45614;
// console.log(user2);

//Important

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys,user[keys]);

// }

//user.keys user["name"] user["age"]

// const user = {
//   name: "Vivek",
//   age: 24,
//   emailId: "Yadav@gamil.com",
//   amount: 3400,
// };

//Destructureing the object
// const {name:userName,age:userAge}=user;

// const arr=[10,20,30,40];
// const [first,second]=arr;
// console.log(first,second);

// console.log(userName,userAge);

// const user = {
//   name: "Vivek",
//   age: 24,
//   emailId: "Yadav@gamil.com",
//   amount: 3400,
// };

//for of loop array ke
// const temparr = Object.keys(user);
// console.log(temparr);
// for(let keys of temparr){
//   console.log(keys);

// }

// for(let values of Object.values(user)){
//   console.log(values);

// }

// for(let [keys,values] of Object.entries(user)){
//   console.log(keys,values);

// }
// [ 'name', 'Vivek' ]
// [ 'age', 24 ]
// [ 'emailId', 'Yadav@gamil.com' ]
// [ 'amount', 3400 ]

// const user = {
//   name: "Vivek",
//   age: 24,
//   emailId: "Yadav@gamil.com",
//   amount: 3400,
//   greeting:function(){
//     console.log(`Strike is coming on 18 October ${this.name}`);
//     return 20;
//   }
// };

// const user2={
//   name:"Dishu",
//   age:24
// }

// user2.greeting=user.greeting;
// user2.greeting();

// const va=user.greeting();
// console.log(va);

// const user = {
//   name: "Vivek",
//   age: 24,
//   emailId: "Yadav@gamil.com",
//   amount: 3400,
//   address: {
//     city: "New Delhi",
//     state: "Delhi",
//   },
// };

//SHALLOW COPY

// const user2 ={...user}
// // user2.name="Dishu";

//  user2.address.city="Muzuffarpur";

// console.log(user);

// console.log(user2.name);

// console.log(user.address.city);


//DEEP COPY
// const user2 = structuredClone(user);
// user2.address.city="Muzuffarpur";
// console.log(user);

 //keys:String ||Symbol
 const sym = Symbol("id");

 const user ={
  name:"Vivek",
  age:"20",
  0:1010,
  2:"Dishu",
  [sym]:"Hnji Kaise ho!"
 }

//  const arr =[10,20,30,40];

 //How arr stores behind the scene ,it stores like object
// {
//   0:10,
//   1:20,
//   2:30,
//   3:40
// }

// console.log(user[sym]);



