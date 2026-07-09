// 1) What is JavaScript?

// JavaScript is a lightweight, interpreted programming language.
// It is commonly used to create dynamic and interactive elements in web applications.
// JavaScript is very easy to implement because it is integrated with HTML.
// It is open and cross - platform.

// 2) Is Javascript synchronuous or Asynchronous?
//  => Javascript is single threaded and synchronous,
//     but it supports asynchronous operations
//     using event loop, callback queue, microtask queue, promises, async/await.

// 3) What are the data types in javascript?
//  => Primitive: string, number, boolean, null, undefined, symbol, bigint
//  => Non-Primitive: object, array, function

// 4) What is the difference between null and undefined?
//  => null is a value that is intentionally assigned to a variable
//  => undefined is a value that is not assigned to a variable

// 5) What is the difference between == and ===?
//  => == is a loose equality operator
//  => == checks for value equality
//  => == does not check for type equality
//  => === is a strict equality operator
//  => === checks for value and type equality

// 6) What is the difference between let, const, and var?
//  => let is a block-scoped variable
//  => const is a block-scoped constant, cannot be reassigned or redeclared
//  => var is a function-scoped variable, can be reassigned and redeclared

// 7) What is hoisting in javascript?
//  => Hoisting is a javascript mechanism where variable and function declarations
//     are moved to the top of their scope during compilation phase

// 8) What is the difference between call(), apply(), and bind()?
//  => call() is used to call a function with a given value of 'this' and arguments
//  => apply() is used to call a function with a given value of 'this' and arguments as an array
//  => bind() is used to create a new function with a given value of 'this' and arguments

// 9) What is the difference between map(), filter(), and reduce()?
//  => map() is used to create a new array with the results of calling
//     a function on every element in the array
//  => filter() is used to create a new array with all elements
//     that pass the test implemented by the provided function
//  => reduce() is used to reduce the array to a single value

//  10) What is Closure in javascript?
//  => Closure is a function that remembers the variables from its outer scope
//     even after the outer function has finished executing

//  11) What is "this" Keyword?
//  => "this" keyword is a reference to the object
//     that is executing the current function

//  12) What is Event Loop?
//  => Event Loop is a mechanism that allows javascript to perform asynchronous operations
//     without blocking the main thread

//  13) What is arrow function?
//  => Arrow function is a concise way to write function in javascript
//  => Arrow function does not have its own "this" keyword
//  => Arrow function does not have its own "arguments" object
//  => Arrow function cannot be used as constructor

//**14) What is the difference between map() and forEach()?
//  => map() is used to create a new array with the results of calling
//     a function on every element in the array
//  => map() returns a new array
// const numbers = [1, 2, 3];

// const result = numbers.map(num => {
//   return num * 2;
// });

// console.log(result);
// // Output: [2, 4, 6]


//  => forEach() is used to execute a function for each element in the array
//  => forEach() returns undefined
// const numbers = [1, 2, 3];

// const result = numbers.forEach(num => {
//   return num * 2; // This return statement doesn't do anything for forEach
// });

// console.log(result);
// // Output: undefined

// Examples:-
// Since forEach() is all about side effects (doing something with the data
// rather than creating a new array),
// const fruits = ['Apple', 'Banana', 'Cherry'];

// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1}: ${fruit}`);
// });
// Output:
// 1: Apple
// 2: Banana
// 3: Cherry

// 15) What is a call back function?
// => A function that is passed as an argument to another function
//    and is executed after the outer function has finished executing
// Example:-
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUserInput(callback) {
//   const userName = "Alice";
//   callback(userName); // Calling the callback function
// }

// processUserInput(greet); // greet is the callback function

// 16) What is a higher order function?
// => A function that takes another function as an argument
//    or returns a function
// Example:-
// function createMultiplier(multiplier) {
//   return function(number) {
//     return number * multiplier;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5)); // Output: 10

// 17) What is a pure function?
// => A function that always returns the same output for the same input
//    and does not have any side effects
// Example:-
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // Output: 5

// 18) What is a currying function?
// => Currying is a technique in functional programming
//    where a function with multiple arguments
//    is transformed into a sequence of functions
//    each taking a single argument
// Example:-
// function add(a) {
//   return function(b) {
//     return a + b;
//   };
// }
// console.log(add(2)(3)); // Output: 5

// 19) What is a memoization?
// => Memoization is an optimization technique
//    where the results of expensive function calls
//    are cached and returned when the same inputs occur again
// Example:-
// function memoize(fn) {
//   const cache = new Map();
//   return function(...args) {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// }
// const add = (a, b) => a + b;
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(2, 3)); // Output: 5
// console.log(memoizedAdd(2, 3)); // Output: 5 (from cache)

// 20) What are Promises?
// => Promise is an object that represents the eventual completion
//    or failure of an asynchronous operation: pending, fulfilled, rejected

// Example:-
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!");
//   }, 2000);
// });
// myPromise.then((result) => {
//   console.log(result);
// });

// 21) What is async/await?
// => Async/await is a syntax that makes asynchronous code
//    look like synchronous code
//  (or)
// => It is a syntax to handle Promises in a cleaner, synchronous-looking way
// => It is built on top of Promises
// => It is a syntactic sugar over Promises
//
// Example:-
// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();

// 22) What is event Bubbling?
// => Event Bubbling means the events are triggered from the child to the parent
// Example:-
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });
// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });
// Output:
// Child clicked
// Parent clicked

// 23) What is event Capturing?
// => Event Capturing means the events are triggered from the parent to the child
// Example:-
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// }, true);
// child.addEventListener("click", () => {
//   console.log("Child clicked");
// }, true);
// Output:
// Parent clicked
// Child clicked

// 24) What is event Delegation?
// => Event Delegation means the events are delegated to the parent element
//    instead of the target element
// Example:-
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// parent.addEventListener("click", (event) => {
//   if (event.target.id === "child") {
//     console.log("Child clicked");
//   }
// });
// Output:
// Child clicked

// 25) What is event Propagation?
// => Event Propagation means the events are triggered from the target element
//    to its ancestors
// Example:-
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });
// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });
// Output:
// Child clicked
// Parent clicked

// 26)What is DOM?
// => DOM stands for Document Object Model
// => It is a programming interface for web documents
// => It represents the structure of a web page as a tree of objects
// => It allows javascript to access and manipulate the content, structure, and style of a web page
// Example:-
// const heading = document.getElementById("heading");
// console.log(heading);
// Output:
// <h1 id="heading">Hello World</h1>

// 27) What is Virtual DOM?
// => Virtual DOM is a lightweight copy of the actual DOM
// => It is used to improve the performance of web applications
// => It is used to reduce the number of updates to the actual DOM
// => It is used to improve the performance of web applications
// Example:-
// const virtualDOM = document.getElementById("virtualDOM");
// console.log(virtualDOM);
// Output:
// <div id="virtualDOM">Hello World</div>

// 28) What is the difference between DOM and Virtual DOM?
// => DOM is a programming interface for web documents
// => Virtual DOM is a lightweight copy of the actual DOM
// => DOM is used to access and manipulate the content, structure, and style of a web page
// => Virtual DOM is used to improve the performance of web applications
// => DOM is used to access and manipulate the content, structure, and style of a web page
// => Virtual DOM is used to improve the performance of web applications
// Example:-
// const virtualDOM = document.getElementById("virtualDOM");
// console.log(virtualDOM);
// Output:
// <div id="virtualDOM">Hello World</div>

// 29) What is NaN?
// => NaN stands for Not a Number
// => It is a special value that represents an invalid number
// Example:-
// const nan = NaN;
// console.log(nan);
// Output:
// NaN

// 30) What is the Spread operator?
// => Spread operator is used to expand an iterable (like an array or string)
//    into individual elements
// Example:-
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);
// Output:
// [1, 2, 3, 4, 5, 6]

// 31) What is the Rest operator?
// => Rest operator is used to collect remaining elements into an single array
// Example:-
// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
// Output:
// 15

// 32) What is Destructuring?
// => Destructuring is a syntax that allows you to extract values from arrays or objects
//    and assign them to variables
// Example:-
// const person = { name: "John", age: 30 };
// const { name, age } = person;
// console.log(name); // Output: John
// console.log(age); // Output: 30

// 33) What is an IIFE?
// => IIFE stands for Immediately Invoked Function Expression
// => It is a function that is executed immediately after it is defined
// Example:-
// (function() {
//   console.log("Hello World");
// })();
// Output:
// Hello World

//34) What is a Prototype?
// => Prototype is an object that is used to share properties and methods
//    among objects
// Example:-
// const person = {
//   name: "John",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
// const person2 = Object.create(person);
// console.log(person2.name); // Output: John
// console.log(person2.greet()); // Output: Hello, my name is John

// 35) What is prototype chaining?
// => Prototype chaining is a mechanism in JavaScript
//    where objects inherit properties and methods from their prototypes

// 36) What is memory leak?
// => Memory leak is a situation where memory is not released after it is no longer needed
// => It can cause the application to slow down or crash
// => It can be caused by event listeners, timers, and closures

// 37) What is setTimeout?
// => setTimeout is a function that is used to execute a function after a specified delay
// Example:-
// setTimeout(() => {
//   console.log("Hello World");
// }, 2000);
// Output:
// Hello World (after 2 seconds)

// 38) What is setInterval?
// => setInterval is a function that is used to execute a function repeatedly after a specified delay
// Example:-
// setInterval(() => {
//   console.log("Hello World");
// }, 2000);
// Output:
// Hello World (every 2 seconds)

// 39) What is clearTimeout?
// => clearTimeout is a function that is used to clear a timeout
// Example:-
// const timeout = setTimeout(() => {
//   console.log("Hello World");
// }, 2000);
// clearTimeout(timeout);
// Output:
// (nothing is printed)

// 40) What is clearInterval?
// => clearInterval is a function that is used to clear an interval
// Example:-
// const interval = setInterval(() => {
//   console.log("Hello World");
// }, 2000);
// clearInterval(interval);
// Output:
// (nothing is printed)

// 41) What is JSON?
// => JSON stands for JavaScript Object Notation
// => It is a lightweight data-interchange format
// => It is easy for humans to read and write
// => It is easy for machines to parse and generate
// Example:-
// const json = '{"name": "John", "age": 30}';
// const obj = JSON.parse(json);
// console.log(obj.name); // Output: John
// console.log(obj.age); // Output: 30

// 42) What is Debouncing?
// => Debouncing is a technique that is used to limit the rate at which a function is called
// Example:-
// const debouncedFunction = debounce(() => {
//   console.log("Hello World");
// }, 2000);
// debouncedFunction();
// Output:
// Hello World (after 2 seconds)

// 43) What is Throttling?
// => Throttling is a technique that is used to limit the rate at which a function is called
// (or)
// => Limits function execution at fixed intervals of time

// Example:-
// const throttledFunction = throttle(() => {
//   console.log("Hello World");
// }, 2000);
// throttledFunction();
// Output:
// Hello World (every 2 seconds)

// 44) What is strict Mode?
// => Strict Mode is a feature in JavaScript that is used to enforce stricter parsing and error handling
// (or)
// => "use strict" enforces cleaner and safer Javascript code

// Example:-
// "use strict";
// function myFunction() {
//   x = 10;
// }
// myFunction();
// Output:
// ReferenceError: x is not defined


// 45) What is Lexical Scope?
// => Lexical Scope is a scope that is determined by the position of the code in the source code
// Example:-
// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();
// Output:
// 10

// 46) What is an object?
// => An object is a collection of key-value pairs
// Example:-
// const person = {
//   name: "John",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
// console.log(person.name); // Output: John
// console.log(person.age); // Output: 30
// console.log(person.greet()); // Output: Hello, my name is John

// 47) Difference between Shallow Copy and Deep Copy?
// => 1. Shallow Copy
// => A shallow copy creates a new object, but it only copies the top-level properties.
// => If a property is a primitive value (like a string, number, or boolean), it copies the value itself.
// => If a property is a reference to another object (like a nested object or array),
//    it copies the reference (the memory address).
// => Result: Changes made to nested objects in the copy will affect the original object, and vice versa.
// => How to make a Shallow Copy:
// => Spread syntax (...)
// => Object.assign()
// => Array.prototype.slice() (for arrays)

// => 2. Deep Copy
// => A deep copy creates a new object and recursively copies all nested objects as well.
// => It copies the actual values at every level, creating entirely new memory spaces for everything.
// => Result: The original object and the new object are completely disconnected. Modifying the deeply nested properties of one will not affect the other.
// => How to make a Deep Copy:
// => JSON.parse(JSON.stringify(object)) (The traditional, slightly limited way)
// => structuredClone(object) (The modern, built-in way - recommended)
// => External libraries like Lodash (_.cloneDeep())

// // Our original object with a nested object
// const originalUser = {
//     name: "Alice",
//     age: 25,
//     address: {
//         city: "New York",
//         zip: "10001"
//     }
// };

// --- SHALLOW COPY ---
// // Using the spread operator
// const shallowCopy = { ...originalUser };

// // Let's modify the shallow copy
// shallowCopy.name = "Bob";               // Modifying a top-level property
// shallowCopy.address.city = "Los Angeles"; // Modifying a nested property

// console.log("Original User City:", originalUser.address.city); // Output: "Los Angeles" (Oops! The original was changed)
// console.log("Original User Name:", originalUser.name);         // Output: "Alice" (Top-level wasn't affected)


// // --- DEEP COPY ---
// // Let's reset the original for this example
// const originalUser2 = {
//     name: "Alice",
//     age: 25,
//     address: {
//         city: "New York",
//         zip: "10001"
//     }
// };

// // Using the modern structuredClone method
// const deepCopy = structuredClone(originalUser2);

// // Let's modify the deep copy
// deepCopy.name = "Charlie";
// deepCopy.address.city = "Chicago"; // Modifying a nested property

// console.log("Original User 2 City:", originalUser2.address.city); // Output: "New York" (Original is safe!)
// console.log("Deep Copy City:", deepCopy.address.city);            // Output: "Chicago"


// 48) What is localStorage?
// => localStorage is a web storage object that allows JavaScript websites and apps to store
//    key-value pairs in a web browser with no expiration date.
//
// => Key Features:
// 1. Persistence: Data stored in localStorage does not expire. It remains even if the
//    browser is closed and reopened (unlike sessionStorage, which clears when the tab closes).
// 2. Storage Limit: It can hold much more data than cookies (typically up to 5MB per domain).
// 3. String based: Both keys and values must be strings. If you want to store objects or arrays,
//    you must convert them using JSON.stringify() first, and parse them with JSON.parse() when reading.
//
// => Core Methods:
// 1. localStorage.setItem(key, value)   - Saves data to localStorage
// 2. localStorage.getItem(key)          - Reads data from localStorage
// 3. localStorage.removeItem(key)       - Deletes a specific item
// 4. localStorage.clear()               - Clears all data for the domain

// // --- EXAMPLES ---

// // 1. Storing and Retrieving Simple Data (Strings)
// localStorage.setItem("username", "Saikumar");
// const storedUser = localStorage.getItem("username");
// console.log("Stored User:", storedUser); // Output: "Stored User: Saikumar"

// // 2. Storing Objects or Arrays
// const userPreferences = {
//     theme: "dark",
//     notifications: true
// };

// // Remember: We must stringify objects before storing!
// localStorage.setItem("preferences", JSON.stringify(userPreferences));

// // Retrieving and parsing the object back
// const storedPrefsString = localStorage.getItem("preferences");
// const storedPrefs = JSON.parse(storedPrefsString);

// console.log("Theme setting:", storedPrefs.theme); // Output: "Theme setting: dark"

// // 3. Removing Data
// localStorage.removeItem("username"); // Removes just the "username" key

// // 4. Clearing Everything
// // localStorage.clear(); // This would wipe all localStorage data for this domain

// 49) What is sessionStorage?
// => sessionStorage is a web storage object that allows you to store key-value pairs
//    for the duration of the page session.
//
// => Key Features:
// 1. Session-based Persistence: Data survives over page reloads and restores,
//    BUT it is completely wiped out when the browser tab or window is closed.

// 50) What is event Deligation?
// => Event Delegation is a technique in JavaScript that allows you to handle events on parent elements
//    instead of individual child elements.
//
// => How it works:
// 1. You attach a single event listener to a parent element.
// 2. When an event occurs on a child element, it bubbles up to the parent.
// 3. The event listener on the parent checks the event.target to determine
//    which child element triggered the event.
// 4. The appropriate action is taken based on the child element.
//
// => Benefits:
// 1. Improved Performance: Reduces the number of event listeners required, which saves memory and improves performance.
// 2. Dynamic Content Handling: Works seamlessly with dynamically added or removed elements without needing to reattach event listeners.
// 3. Cleaner Code: Simplifies event handling logic by centralizing it in one place.
//
// => Example:
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// // With Event Delegation:
// const list = document.getElementById("myList");

// list.addEventListener("click", function(event) {
//   if (event.target.tagName === "LI") {
//     console.log("Clicked on:", event.target.textContent);
//   }
// });

// // Without Event Delegation (less efficient):
// const listItems = document.querySelectorAll("#myList li");
// listItems.forEach(item => {
//   item.addEventListener("click", function() {
//     console.log("Clicked on:", item.textContent);
//   });
// });

// 51) What is a Module in JavaScript?
// => A Module in JavaScript is just a file containing a piece of code. It is a way to
//    split your code into separate, smaller, reusable, and maintainable files.
//
// => Key Concepts:
// 1. Encapsulation: Code inside a module is scoped to that module, NOT the global window
//    object. This prevents naming collisions (two variables with the same name in different files).
// 2. Export / Import: By default, everything inside a module is private. To use variables,
//    functions, or classes outside the file, you must explicitly 'export' them. Other files
//    must then 'import' them to use them.
// 3. Types of Modules: There are differences between CommonJS (used historically in Node.js
//    with module.exports / require()) and modern ES6 Modules (used in modern JS with export / import).
//
// => Core Syntax (ES6 Modules):
// // --- File 1: math.js (The Module) ---
// // Name Export (Can export multiple things)
// export const PI = 3.14159;
// export function add(a, b) {
//     return a + b;
// }
// // Default Export (Only one per file, usually the main thing the file does)
// export default function subtract(a, b) {
//     return a - b;
// }
// // --- File 2: app.js (Using the Module) ---
// // Importing named exports (Requires curly braces and exact names)
// import { PI, add } from './math.js';
// // Importing the default export (No curly braces, you can name it anything here)
// import subtractor from './math.js';
// console.log(PI);          // Output: 3.14159
// console.log(add(5, 5));     // Output: 10
// console.log(subtractor(10, 2)); // Output: 8
// Note: To use ES6 modules in a standard HTML file, you must add type="module" to the script tag:
// <script type="module" src="app.js"></script>


// 52) What is typeof operator?
// => The typeof operator is a unary operator (meaning it takes one operand) that returns a
//    string indicating the data type of the value or variable you pass to it.
//
// => Syntax: typeof operand  OR  typeof(operand) (The parentheses are optional but sometimes useful)
//
// => Key Return Values:
// - "string"
// - "number"
// - "boolean"
// - "undefined"
// - "object"
// - "function"
// - "symbol"
// - "bigint"
//
// =>  CRITICAL INTERVIEW GOTCHAS
// 1. typeof null === "object": This is a famous, long-standing bug in JavaScript.
//    Null is a primitive value, not an object, but fixing this bug would break millions
//    of legacy websites, so it was left as-is.
// 2. typeof [] === "object": Arrays are technically standard objects in JavaScript under the hood.
//    To check if something is actually an array, use Array.isArray().
// 3. NaN is a Number: typeof NaN === "number". NaN means "Not-a-Number", but its data type is Number.
//
// => Examples:

// // Primitives
// console.log(typeof "Hello");     // Output: "string"
// console.log(typeof 42);          // Output: "number"
// console.log(typeof true);        // Output: "boolean"
// console.log(typeof undefined);   // Output: "undefined"
// console.log(typeof Symbol());    // Output: "symbol"
// console.log(typeof 10n);         // Output: "bigint"

// // Objects and Functions
// console.log(typeof {a: 1});      // Output: "object"
// console.log(typeof function(){});// Output: "function"

// // The "Gotchas"
// console.log(typeof null);        // Output: "object" (The famous bug)
// console.log(typeof [1, 2, 3]);   // Output: "object" (Use Array.isArray([1,2,3]) instead)
// console.log(typeof NaN);         // Output: "number"

// 53) What is Garbage Collection?
// => Garbage Collection is a form of automatic memory management in JavaScript.
// => The engine automatically allocates memory when you create variables/objects
//    and automatically frees that memory when it is no longer needed.
//
// => How does it know what to delete? (The Algorithm)
// => The main concept is "Reachability".
//    Memory is kept as long as it is "reachable" (accessible) from the "Root".
//    - The "Root" is usually the global object (like the `window` object in a browser).
//    - The garbage collector periodically runs an algorithm called "Mark-and-Sweep".
//    - It starts at the root, finds all references, and "marks" them as reachable.
//    - It continues down the chain, marking all nested references.
//    - Finally, it "sweeps" (deletes) any memory that was NOT marked (meaning it is
//      unreachable and no longer needed by the program).
//
// => What is a Memory Leak?
// => A memory leak happens when you accidentally keep references to objects you
//    no longer need. Because those objects are still "reachable" via that reference,
//    the Garbage Collector won't delete them, causing your app to use more and more memory.
//
// => Common causes of memory leaks:
// 1. Accidental global variables (e.g., forgetting 'let' or 'const').
// 2. Forgotten timers or callbacks (e.g., setInterval that is never cleared).
// 3. Closures that hold onto large amounts of data unnecessarily.
// 4. Detached DOM elements (saving a reference to a DOM node in JS, then removing it from the HTML).

// // --- Example of how reachability works ---

// let user = { name: "John" };
// // The object { name: "John" } is reachable because `user` references it.

// user = null;
// // The reference is broken! The object { name: "John" } is now unreachable.
// // The Garbage Collector will notice this during its next cycle and free that memory.

// // --- Example: Accidental Memory Leak (Forgotten Timer) ---
// function startLeaking() {
//     const heavyObject = new Array(1000000).fill("Data");
//
//     // If we never call clearInterval on this interval, the interval keeps running
//     // and keeps `heavyObject` reachable forever, even after `startLeaking` finishes.
//     setInterval(() => {
//         console.log(heavyObject[0]);
//     }, 1000);
// }
// // startLeaking(); 





