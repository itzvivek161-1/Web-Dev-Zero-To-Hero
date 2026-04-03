//Variable Kaise Define Kare

// 1.Const
// const a=20;

// a=20; //error
// console.log(a);

//But in object
// const obj = {Name:"Vivek"};
// obj.Name="Dishu";
// console.log(obj.Name);

//Let
// let a=10;
// a=20;//allowed
// let a=30;// this is not allowed
// console.log(a);

// let score=0;
// score=10;
// console.log(score);

// if(true){
//     let hidden ="secret";

// }
// console.log(hidden); // ReferenceError — box doesn't exist out here

//Var
// console.log(  a); //No error Give undefine
// var a=10;

// console.log(  a);

//Ignores the scope
// if(true){
//     var leak="oops";
// }
// console.log(leak); // "oops" — it escaped the block!

//Primitive DataTypes-7 types
// string    → text          "hello"
// number    → any number    42, 3.14, NaN, Infinity
// boolean   → true/false    true, false
// undefined → not yet set   let x;  → x is undefined
// null      → intentionally empty   let x = null;
// bigint    → huge numbers  9007199254740991n
// symbol    → unique ID     Symbol("id")

//Null vs Undefined
// let a; //Undefined;
// let b=null; //null-intentinally saying "nothing here"
// console.log(a);
// console.log(b);

//NaN — the weird one:
// let a=0/0;
// // console.log(a);
// let a = "hello" + 5; //it will give string
// console.log(typeof a);
// 0 / 0           // NaN
// "hello" * 5     // NaN
// typeof NaN      // "number" 😅 yes, NaN is technically a number type
// NaN === NaN     // false — NaN is not equal to itself!

// "10" + 5      // "105"
// 10 + "5"      // "105"
// 10 + 5        // 15

//Trap Question
// 1=>"5" - 2
//2=>"5" + 2 + 3
// "5" + 2 → "52"
// "52" + 3 → "523"
// 3=>5 + 2 + "3"
// 5 + 2 → 7
// 7 + "3" → "73"
//output
// 1=>3
// 2=>"523"
//3=>"73"


// let a = "hello" + String(5);
// let a = `hello${5}`;
// console.log(a);


// JavaScript — Variables & Data Types (Complete Notes)
// ---
// 1. Variables — var, let, const
// var (OLD — avoid it)
// Scope: Function-scoped (ignores blocks like if, for)
// Reassignable: YES
// Redeclarable: YES (same name, same scope — no error)
// Hoisting: YES — hoisted with value `undefined`
// Attaches to `window` object globally
// ```js
// console.log(x); // undefined (no error — hoisted)
// var x = 10;

// if (true) {
//   var leak = "oops";
// }
// console.log(leak); // "oops" — leaked outside the block!

// var x = 99; // allowed to redeclare — no error
// ```
// > Why avoid: unpredictable scoping causes bugs that are hard to trace.
// ---
// let (MODERN — use when value changes)
// Scope: Block-scoped (stays inside { })
// Reassignable: YES
// Redeclarable: NO
// Hoisting: YES — but NOT initialized → Temporal Dead Zone (TDZ)
// ```js
// let score = 0;
// score = 10; // allowed

// if (true) {
//   let hidden = "secret";
// }
// console.log(hidden); // ReferenceError — block-scoped

// console.log(myVar); // ReferenceError — TDZ
// let myVar = 5;
// ```
// ---
// const (MODERN — use by default)
// Scope: Block-scoped
// Reassignable: NO (can't point to a new value)
// Redeclarable: NO
// Hoisting: YES — but NOT initialized → TDZ
// Note: const only locks the REFERENCE, not the contents
// ```js
// const PI = 3.14;
// PI = 3; // TypeError — can't reassign

// const user = { name: "Aryan" };
// user = {}; // TypeError — can't swap reference
// user.name = "Ravi"; // ALLOWED — contents can change

// const arr = [1, 2, 3];
// arr.push(4); // ALLOWED — array contents can change
// ```
// ---
// Summary Table
// Feature	var	let	const
// Scope	Function	Block	Block
// Reassignable	YES	YES	NO
// Redeclarable	YES	NO	NO
// Hoisted value	undefined	Uninitialized(TDZ)	Uninitialized(TDZ)
// Window attach	YES	NO	NO
// Modern use	AVOID	When value changes	Default choice
// ---
// 2. Temporal Dead Zone (TDZ)
// The TDZ is the period between the start of a block and the line where let/const is declared. Accessing the variable in this zone throws a ReferenceError.
// ```js
// // TDZ starts here for 'name'
// console.log(name); // ReferenceError
// let name = "Aryan"; // TDZ ends here
// console.log(name); // "Aryan"
// ```
// var does NOT have TDZ — it returns undefined instead of throwing.
// ---
// 3. Data Types Overview
// JavaScript has 2 categories of types:
// ```
// Data Types
// ├── Primitive (7 types)   — immutable, stored by VALUE
// │   ├── string
// │   ├── number
// │   ├── boolean
// │   ├── undefined
// │   ├── null
// │   ├── bigint
// │   └── symbol
// │
// └── Non-Primitive (Object) — mutable, stored by REFERENCE
//     ├── Object {}
//     ├── Array []
//     ├── Function
//     └── Date, Map, Set, RegExp...
// ```
// ---
// 4. Primitive Types — Deep Dive
// What does "Primitive" mean?
// Stored directly in memory (on the Stack)
// Passed and assigned by VALUE (a copy is made)
// IMMUTABLE — the actual value in memory cannot be changed
// Simple, lightweight, atomic
// ---
// string
// Represents text. Enclosed in '', "", or backticks.
// ```js
// let name = "Aryan";
// let greeting = 'Hello';
// let template = `Hi, ${name}!`; // template literal — can embed expressions

// // Strings are IMMUTABLE
// let str = "hello";
// str[0] = "H"; // silently ignored — does nothing
// console.log(str); // "hello" — unchanged

// // Operations create NEW strings, not modify existing ones
// let upper = str.toUpperCase(); // creates a new string "HELLO"
// console.log(str);   // "hello" — original untouched
// console.log(upper); // "HELLO" — new string
// ```
// ---
// number
// Represents integers AND floats. No distinction between them.
// ```js
// let age = 25;
// let price = 99.99;
// let result = 0 / 0;    // NaN (Not a Number)
// let big = Infinity;

// // Famous JS quirk
// console.log(0.1 + 0.2); // 0.30000000000000004 (floating point issue)
// console.log(NaN === NaN); // false — NaN is never equal to itself
// console.log(typeof NaN);  // "number" — yes, NaN is a number type (JS bug)
// ```
// ---
// boolean
// Only two values: true or false.
// ```js
// let isLoggedIn = true;
// let hasPermission = false;

// // Falsy values in JS (treated as false):
// // false, 0, "", null, undefined, NaN
// ```
// ---
// undefined
// A variable declared but not yet assigned a value.
// ```js
// let x;
// console.log(x); // undefined — JS assigns this automatically

// function greet(name) {
//   console.log(name); // undefined if not passed
// }
// greet();
// ```
// ---
// null
// Intentionally empty. Developer explicitly says "no value here."
// ```js
// let data = null; // intentionally empty

// // null vs undefined
// let a;           // undefined — forgot to assign
// let b = null;    // null — deliberately set to nothing

// console.log(typeof null); // "object" — famous JS bug (not actually an object)
// ```
// ---
// bigint
// For numbers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).
// ```js
// const big = 9007199254740991n; // add 'n' suffix
// const result = big + 1n;       // must operate with other BigInts

// // Cannot mix with regular number
// console.log(big + 1); // TypeError
// ```
// ---
// symbol
// Creates a guaranteed unique value. Used as object keys to avoid collisions.
// ```js
// const id1 = Symbol("id");
// const id2 = Symbol("id");

// console.log(id1 === id2); // false — every Symbol is unique

// const obj = {};
// obj[id1] = "user123"; // used as a unique key
// ```
// ---
// 5. Why Primitives are IMMUTABLE
// Immutable = the actual value stored in memory cannot be modified.
// When you "change" a primitive, you are creating a NEW value in memory,
// not editing the old one.
// ```js
// let str = "hello";

// // What looks like modification:
// str = str + " world";

// // What actually happens in memory:
// // 1. "hello" exists at address 0x001
// // 2. " world" exists at address 0x002
// // 3. "hello world" is created at address 0x003 (NEW)
// // 4. str now points to 0x003
// // 5. "hello" at 0x001 is untouched — GC will clean it up

// // Original value was NEVER modified
// ```
// This is why passing primitives to functions is safe:
// ```js
// function double(n) {
//   n = n * 2; // only changes the local copy
// }

// let x = 10;
// double(x);
// console.log(x); // 10 — x was not affected
// ```
// ---
// 6. Non-Primitive (Object) Type — Deep Dive
// What does "Non-Primitive" mean?
// Stored in Heap memory
// Variable holds a REFERENCE (memory address), not the value itself
// Passed and assigned by REFERENCE (both variables point to same object)
// MUTABLE — contents can be changed after creation
// ---
// Object
// Collection of key-value pairs.
// ```js
// let person = {
//   name: "Aryan",
//   age: 25
// };

// person.name = "Ravi"; // ALLOWED — objects are mutable
// person.city = "Delhi"; // can add new properties
// delete person.age;     // can delete properties
// ```
// ---
// Array
// Ordered list. Actually an object with numeric keys.
// ```js
// let nums = [1, 2, 3];
// nums.push(4);    // ALLOWED — mutable
// nums[0] = 99;    // ALLOWED
// console.log(nums); // [99, 2, 3, 4]
// ```
// ---
// Function
// Functions are also objects in JS.
// ```js
// function greet() {
//   console.log("hello");
// }

// greet.myProp = "I am a function object"; // you can add properties to functions
// console.log(greet.myProp); // "I am a function object"
// ```
// ---
// 7. Mutable vs Immutable — Full Comparison
// Immutable (Primitives)
// ```js
// // Strings
// let a = "hello";
// let b = a;        // b gets a COPY of "hello"
// b = "world";
// console.log(a);   // "hello" — untouched
// console.log(b);   // "world"

// // Numbers
// let x = 10;
// let y = x;        // y gets a COPY of 10
// y = 999;
// console.log(x);   // 10 — untouched
// ```
// Memory picture:
// ```
// Stack
// a → "hello"    (own copy)
// b → "world"    (own copy, separate)
// x → 10         (own copy)
// y → 999        (own copy, separate)
// ```
// ---
// Mutable (Objects)
// ```js
// let obj1 = { score: 10 };
// let obj2 = obj1;          // obj2 gets the REFERENCE, not a copy
// obj2.score = 999;
// console.log(obj1.score);  // 999 — obj1 was affected!
// console.log(obj2.score);  // 999 — same object

// // Arrays too
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1); // [1, 2, 3, 4] — arr1 was affected!
// ```
// Memory picture:
// ```
// Stack                  Heap
// obj1 → (0x4f2a) ────→ { score: 999 }
// obj2 → (0x4f2a) ────↗ (same object!)
// ```
// ---
// 8. How to TRULY Copy an Object (Breaking the Reference)
// Shallow copy — one level deep
// ```js
// // Method 1: spread operator
// let original = { name: "Aryan", age: 25 };
// let copy = { ...original };
// copy.name = "Ravi";
// console.log(original.name); // "Aryan" — safe

// // Method 2: Object.assign
// let copy2 = Object.assign({}, original);

// // For arrays
// let arr = [1, 2, 3];
// let arrCopy = [...arr];
// ```
// The shallow copy trap — nested objects
// ```js
// let user = {
//   name: "Aryan",
//   address: { city: "Delhi" } // nested object
// };

// let copy = { ...user };
// copy.address.city = "Mumbai"; // modifies the INNER object

// console.log(user.address.city); // "Mumbai" — still affected!
// // Spread only copies one level deep
// ```
// Deep copy — all levels
// ```js
// // Method: JSON stringify/parse (works for simple objects)
// let deep = JSON.parse(JSON.stringify(user));
// deep.address.city = "Mumbai";
// console.log(user.address.city); // "Delhi" — truly safe now

// // Limitation: doesn't work with functions, undefined, Date, Symbol
// ```
// ---
// 9. typeof Operator
// ```js
// typeof "hello"       // "string"
// typeof 42            // "number"
// typeof 3.14          // "number"
// typeof NaN           // "number"   ← NaN is a number type
// typeof true          // "boolean"
// typeof undefined     // "undefined"
// typeof null          // "object"   ← famous JS bug
// typeof {}            // "object"
// typeof []            // "object"   ← arrays are objects
// typeof function(){}  // "function"
// typeof Symbol()      // "symbol"
// typeof 42n           // "bigint"
// ```
// To properly check for array:
// ```js
// Array.isArray([1, 2, 3]); // true
// Array.isArray({});         // false
// ```
// To properly check for null:
// ```js
// let x = null;
// x === null; // true — only way to reliably check for null
// ```
// ---
// 10. Stack vs Heap — Where Data Lives
// ```
// Memory
// ├── Stack (fast, small, automatic cleanup)
// │   ├── All primitive VALUES live here directly
// │   │   let x = 42  →  [42] stored on stack
// │   └── Object REFERENCES (pointers) live here
// │       let obj = {...}  →  [0x4f2a] on stack → points to heap
// │
// └── Heap (large, GC managed)
//     └── Actual object contents live here
//         { name: "Aryan", age: 25 }
// ```
// When a function ends:
// Stack frame is destroyed automatically
// Primitives inside it disappear
// Object references disappear from stack
// But the objects in heap survive until GC collects them
// ---
// 11. Garbage Collection (GC)
// GC automatically removes objects from heap that nothing points to anymore.
// ```js
// let user = { name: "Aryan" }; // object in heap, user holds reference
// user = null;                   // reference dropped
// // GC sees: nothing points to { name: "Aryan" } anymore
// // GC removes it from heap — memory freed
// ```
// Circular reference (modern GC handles this):
// ```js
// let a = {};
// let b = {};
// a.ref = b;
// b.ref = a;
// // a and b reference each other
// // Old GC would leak this — modern mark-and-sweep handles it correctly
// ```
// ---
// 12. Golden Rules to Remember
// Primitives are copied by VALUE — changing one never affects another
// Objects are copied by REFERENCE — changing one affects all that point to it
// const does NOT make objects immutable — it only prevents reassigning the variable
// Primitives are immutable — you can't change the value itself, only create a new one
// Objects are mutable — you can freely add, change, or delete their properties
// Use spread {...obj} or JSON.parse(JSON.stringify(obj)) to truly copy objects
// typeof null returns "object" — this is a JS bug, not a feature
// NaN is not equal to itself — use Number.isNaN() to check for NaN
// ```js
// // Rule 3 example
// const arr = [1, 2, 3];
// arr.push(4);      // allowed — contents mutable
// arr = [5, 6, 7];  // TypeError — reference locked by const

// // Rule 8 example
// console.log(NaN === NaN);       // false
// console.log(Number.isNaN(NaN)); // true — correct way
// ```
// ---
// Notes cover: var/let/const, TDZ, all 7 primitives, objects, mutability, value vs reference, shallow vs deep copy, typeof, stack/heap, GC
