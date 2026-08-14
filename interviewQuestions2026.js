
// 28-07-2026
// 1. What is CSSOM?
// Answer:

// CSSOM is a tree - like structure created by the browser from CSS files.
// It contains all CSS rules and computed styles.
// The browser combines DOM + CSSOM to create the Render Tree.
// The Render Tree is used to calculate layout and paint the webpage.

//     Flow:

// HTML------> DOM
// CSS-------> CSSOM
// DOM + CSSOM-- > Render Tree-- > Layout-- > Paint-- > Screen



// 2. what is reconicelised in react Dom?
// Answer:

// Reconciliation is React's process of comparing the old Virtual DOM with the new Virtual DOM.
// React finds the differences(Diffing Algorithm).
// It updates only the changed elements in the real DOM.
// This makes React fast and efficient.

//     Steps:

// State / Props change.
// React creates a new Virtual DOM.
// Compares it with the previous Virtual DOM.
// Finds differences.
// Updates only changed nodes in the Real DOM.

//     Example

// function App() {
//     const [count, setCount] = React.useState(0);

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>
//                 Increment
//             </button>
//         </>
//     );
// }

// When count changes:

// New Virtual DOM is created.
// React compares old vs new.
//     Only < h1 > is updated.
// Button is not re - rendered in the Real DOM.


// 3. What are the life cycle methods in react in functional components? how does it works?

// Functional components don't have class lifecycle methods. They use Hooks, mainly useEffect.

// Class Lifecycle	                      Functional Component
// componentDidMount	                  useEffect(() => { }, [])
// componentDidUpdate	                  useEffect(() => { }, [dependency])
// componentWillUnmount	                  return () => { } inside useEffect


// Mounting(Runs Once)
// useEffect(() => {
//     console.log("Component Mounted");
// }, []);


// Updating(Runs when dependency changes)
// useEffect(() => {
//     console.log("Count Updated");
// }, [count]);

// Unmounting(Cleanup)
// useEffect(() => {
//     const timer = setInterval(() => { }, 1000);

//     return () => {
//         clearInterval(timer);
//         console.log("Component Unmounted");
//     };
// }, []);

// All Lifecycle Together
// function App() {
//     const [count, setCount] = React.useState(0);

//     useEffect(() => {
//         console.log("Mounted / Updated");

//         return () => {
//             console.log("Cleanup Before Next Update or Unmount");
//         };
//     }, [count]);

//     return (
//         <button onClick={() => setCount(count + 1)}>
//             {count}
//         </button>
//     );
// }


// 4. write the memoize function ? And update how to manage  the multiple arg?
// Interview Points

// Stores previous function results.
// Avoids repeated calculations.
// Improves performance.
// Multiple arguments are handled by creating a unique cache key(commonly JSON.stringify(args)
//  for simple values).

// Basic Memoize
function memoize(fn) {
    const cache = {};

    return function (arg) {
        if (cache[arg] !== undefined) {
            console.log("From Cache");
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const square = memoize((n) => n * n);

console.log(square(5)); // Calculates
console.log(square(5)); // Cache

// Memoize with Multiple Arguments
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            console.log("From Cache");
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const add = memoize((a, b, c) => a + b + c);

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2, 3)); // From Cache
console.log(add(2, 3, 4)); // 9


// 5. What is CSS style tree ?
// Answer:
// The Style Tree(often discussed together with the Render Tree) is an internal browser representation created after the browser applies CSS rules from the CSSOM to DOM elements.

//     Flow

// HTML
//    ↓
// DOM

// CSS
//    ↓
// CSSOM

// DOM + CSSOM
//       ↓
// Style Computation(Computed Styles)
//       ↓
// Render Tree
//       ↓
// Layout
//       ↓
// Paint

// How it works

// Browser parses HTML → creates the DOM.
// Browser parses CSS → creates the CSSOM.
// Browser matches CSS selectors to DOM elements.
// Each visible element gets its computed style(style computation).
// The browser builds the Render Tree, which contains only visible elements with their computed styles.
// Layout calculates sizes and positions.
// Paint draws pixels on the screen.

//     Example

//     < h1 class="title" > Hello</ >
// .title {
//     color: blue;
//     font - size: 30px;
// }

// The browser computes:

// h1
//  ├── color: blue
//  ├── font - size: 30px
//  └── display: block

// These computed styles are then used to build the Render Tree.

// Interview Revision(Easy to Remember)
// CSSOM: CSS → CSS Object Model → combines with DOM to build the Render Tree.
// Reconciliation: React compares old vs new Virtual DOM and updates only changed elements in the Real DOM.
// Functional Lifecycle: useEffect handles mount([]), update([deps]), and unmount(cleanup function).
// Memoization: Caches function results to avoid recomputation; for multiple arguments, use a unique key like JSON.stringify(args).
// CSS Style Tree: Computed styles created by applying CSSOM to the DOM before building the Render Tree.



// 01-08-2026

// 6. What is NORMALISE IN SQL?
// 7. how we can use the normalise in sql?
// 8. write some table with FN1 and FN2 and FN3 with example?
// 9. what is the difference between FN1 and FN2 and FN3?
// 10. what is the difference between primary key and foreign key?
// 11. what is react and how it works?
// 12. what is node js and how it works?
// 13. what is the difference between node js and react js?
// 14. write the code for storing the data in FN3?
// 15. what is the difference between sql and nosql?
//


// 6. What is Normalization in SQL?
// Answer
// Normalization is the process of organizing data into multiple related tables.
// It reduces data redundancy (duplicate data).
// It improves data consistency and integrity.
// It makes updates, inserts, and deletes easier.

// Example (Without Normalization)

// EmpID	Name	Department	Department Manager
// 1	    John	HR	         David
// 2	    Sam 	HR	         David
// 3	    Mike	IT	          Alice

// Here, Department Manager is repeated multiple times.

// 7. How can we use Normalization in SQL?

// We divide the data into separate tables.

// Employee Table
// EmpID	Name	DeptID
// 1	    John	1
// 2	    Sam	    1
// 3	    Mike	2
// Department Table
// DeptID	Department	Manager
// 1	      HR	    David
// 2	      IT	    Alice

// Now, if the HR manager changes, update only one row.

// 8. Explain 1NF, 2NF, and 3NF with Example ?
// Original Table (Not Normalized)
// OrderID	Customer	Products	         CustomerCity
// 1	    John       	Mouse, Keyboard	      Hyderabad
// 2	    Sam	        Laptop	              Bangalore

// Products contains multiple values in one column.

// First Normal Form (1NF)

// Rule

// Every column should contain only one value (atomic values).
// No repeating groups.
// Orders
// OrderID	        Customer	Product	    CustomerCity
// 1	            John	    Mouse	     Hyderabad
// 1	            John	    Keyboard	 Hyderabad
// 2	            Sam	         Laptop	     Bangalore
// Second Normal Form (2NF)

// Rule

// Must satisfy 1NF.
// Remove partial dependency.
// Every non-key column must depend on the whole primary key.
// Customers
// CustomerID	Customer	City
// 1	         John	    Hyderabad
// 2	         Sam	    Bangalore
// Orders
// OrderID	CustomerID
// 1	     1
// 2	     2
// OrderItems
// OrderID	    Product
// 1	        Mouse
// 1	        Keyboard
// 2	        Laptop
// Third Normal Form (3NF)

// Rule

// Must satisfy 2NF.
// Remove transitive dependency.
// Non-key columns should depend only on the primary key.
// Employees
// EmpID	Name	DeptID
// 1	     John	1
// 2	     Sam	2
// Departments
// DeptID	Department	    Manager
// 1	     HR	            David
// 2	     IT	            Alice


// 9. Difference between 1NF, 2NF, and 3NF?
// 1NF	2NF	3NF
// Removes repeating groups	Removes partial dependency	Removes transitive dependency
// Atomic values only	Depends on the whole primary key	Depends only on the primary key
// No multiple values in one cell	No partial dependency	No indirect dependency

// Easy to Remember

// 1NF: One value per cell.
// 2NF: Remove partial dependency.
// 3NF: Remove transitive dependency.


// 10. Difference between Primary Key and Foreign Key?
// Primary Key	Foreign Key
// Uniquely identifies a row	References a primary key in another table
// Cannot be NULL	Can be NULL (unless constrained)
// One primary key per table	Multiple foreign keys allowed
// Must be unique	Can contain duplicate values
// Example

// Department

// DeptID (PK)	Name
// 1	        HR
// 2	     IT

// Employee

// EmpID (PK)	Name	DeptID (FK)
// 1	         John	1
// 2	         Sam	2


// 11. What is React and how does it work?
// Answer
// React is a JavaScript library for building user interfaces.
// It is component-based.
// It uses a Virtual DOM.
// When state or props change, React creates a new Virtual DOM, compares it with the previous one (Reconciliation), and updates only the changed parts of the Real DOM.

// Flow

// User Action
//       ↓
// State Changes
//       ↓
// Virtual DOM
//       ↓
// Diffing (Reconciliation)
//       ↓
// Real DOM Update
//       ↓
// Browser


// 12. What is Node.js and how does it work?
// Answer
// Node.js is a JavaScript runtime built on Chrome's V8 engine.
// It allows JavaScript to run outside the browser.
// It uses a single-threaded, event-driven, non-blocking I/O model.

// Flow

// Client Request
//       ↓
// Event Loop
//       ↓
// Non-blocking I/O
//       ↓
// Worker Threads (if needed)
//       ↓
// Response

// Example

// A database query runs asynchronously.
// Node.js can handle other requests while waiting for the database response.


// 13. Difference between Node.js and React.js
// React.js	Node.js
// Frontend library	Backend runtime
// Builds UI	Runs server-side JavaScript
// Runs in browser	Runs on server
// Uses Virtual DOM	Uses Event Loop
// Creates components	Creates APIs and backend services
// 14. SQL Code for Storing Data in 3NF
// Create Department Table
// CREATE TABLE Department (
//     DeptID INT PRIMARY KEY,
//     DepartmentName VARCHAR(50),
//     Manager VARCHAR(50)
// );
// Create Employee Table
// CREATE TABLE Employee (
//     EmpID INT PRIMARY KEY,
//     Name VARCHAR(50),
//     DeptID INT,
//     FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
// );
// Insert Data
// INSERT INTO Department
// VALUES
// (1,'HR','David'),
// (2,'IT','Alice');
// INSERT INTO Employee
// VALUES
// (101,'John',1),
// (102,'Sam',2),
// (103,'Mike',1);


// 15. Difference between SQL and NoSQL
// SQL	NoSQL
// Relational database	Non-relational database
// Table-based	Document, Key-Value, Graph, Column
// Fixed schema	Flexible schema
// Uses SQL queries	No standard query language
// Supports ACID transactions	Often optimized for scalability and availability (varies by database)
// Best for complex joins and structured data	Best for large-scale, rapidly changing, or semi-structured data
// Examples

// SQL

// MySQL
// PostgreSQL
// SQL Server
// Oracle

// NoSQL

// MongoDB
// Cassandra
// Redis
// CouchDB


// Interview Revision (Quick Answers)
// Normalization: Organizes data to reduce redundancy and improve consistency.
// 1NF: One value per cell.
// 2NF: Remove partial dependency.
// 3NF: Remove transitive dependency.
// Primary Key: Uniquely identifies a row.
// Foreign Key: Links one table to another using a primary key.
// React: Component-based UI library using Virtual DOM and Reconciliation.
// Node.js: JavaScript runtime using an event-driven, non-blocking architecture.
// React vs Node: React is for frontend UI; Node.js is for backend/server-side JavaScript.
// 3NF Storage: Split related data into separate tables connected by foreign keys.
// SQL vs NoSQL: SQL is relational with a fixed schema; NoSQL is non-relational with a flexible schema.


// 08-08-2026
// 1. What is Static Mode in React?
// 2. What is Rest and spread operator in React?
// 3. What are the life cycle methods in react?
// 4. what is useReducer in react and how it works?
// 5. what is callback function in react and how it works?
// 6. what is the difference between useState and useReducer in react?
// 7. what is useQuery in react and how it works?
// 8. what is usememo in react and how it works?
// 9. what is psuedo class in css and how it works?
// 10. what is synchronous and asynchronous in javascript and how it works?
// 11. what is promises in javascript and how it works?
// 12 which tools used optimize the performance in react?
// 13. what AI tool and version used in for development?
// 14. what is Node js and how it works?
// 15. what is the testing tools (jest, cypress)used in react and node js?
// 16. what is higher order functions in react and how it works?
// 17. what is pure function in react and how it works?
// 18. what is event bubbling and event capturing in react and how it works?
// 19. what is box model in css and how it works?
// 20. what is shallow copy and deep copy?
// 21. what are ES6 features?
// 22. what is eslint and how it works?
// 23. what is recoincolation in react?


// ==================================
// ANSWERS
// ==================================

// 1. What is Static Mode in React ?

//     Answer :
//     In React, static rendering / static mode generally means generating HTML ahead of time instead of rendering everything dynamically on every request.It is commonly used with frameworks like Next.js for better performance and SEO.

// export default function Home() {
//     return <h1>Hello React</h1>;
// }

// Interview point: Static content can be generated ahead of time and served quickly.

//     Note: If the interviewer specifically means React Strict Mode, that's different—it helps detect potential problems during development.

// 2. What are Rest and Spread Operators ?

//     Both use ..., but their purpose is different.

//         Spread → expands values

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];


// console.log(arr2); // [1,2,3,4]

// Rest → collects values

// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }


// sum(1, 2, 3); // 6

// Interview point:

// Spread = expand
// Rest = collect

// 3. What are the Lifecycle Methods in React ?

//     React component lifecycle has three phases:

// Mounting – component is created.
//     Updating – state / props change.
//         Unmounting – component is removed.

// Class component:

// class App extends React.Component {
//     componentDidMount() {
//         console.log("Mounted");
//     }


//     componentDidUpdate() {
//         console.log("Updated");
//     }


//     componentWillUnmount() {
//         console.log("Unmounted");
//     }


//     render() {
//         return <h1>Hello</h1>;
//     }
// }

// With functional components, we commonly use useEffect:

// useEffect(() => {
//     console.log("Mounted");


//     return () => {
//         console.log("Unmounted");
//     };
// }, []);

// 4. What is useReducer and how does it work ?

//     Answer :
//     useReducer is a React Hook used to manage complex state logic using a reducer function and actions.

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 };


//         default:
//             return state;
//     }
// };


// const [state, dispatch] = useReducer(reducer, { count: 0 });


// <button onClick={() => dispatch({ type: "increment" })}>
//     {state.count}
// </button>

// Flow:

// dispatch(action) → reducer() → new state → re - render

// 5. What is a Callback Function in React ?

//     A callback is a function passed to another function/component and executed later.

// function Parent() {
//     const handleClick = (name) => {
//         console.log(name);
//     };


//     return <Child onClick={handleClick} />;
// }


// function Child({ onClick }) {
//     return (
//         <button onClick={() => onClick("Sai")}>
//             Click
//         </button>
//     );
// }

// Interview point:
// Callbacks are commonly used for passing data / events from child to parent.

// 6. Difference Between useState and useReducer
// useState	useReducer
// Simple state	Complex state
// Direct update	Action - based update
// Less code	More structured
// Good for input / toggle	Good for complex forms / state
// useState
// const [count, setCount] = useState(0);


// setCount(count + 1);
// useReducer
// dispatch({ type: "increment" });

// Interview answer:

// I use useState for simple state and useReducer when multiple state transitions or complex business logic are involved.

// 7. What is useQuery in React ?

//     useQuery is not a built -in React Hook.It is commonly provided by libraries such as TanStack Query(React Query).

// It handles:

// API calls
// Loading state
// Error state
// Caching
// Refetching
// Server - state synchronization
// const { data, isLoading, error } = useQuery({
//     queryKey: ["users"],
//     queryFn: () => fetch("/api/users").then(res => res.json())
// });

// Interview point:

// useQuery is mainly used for managing server state and API data.

// 8. What is useMemo and how does it work ?

//     useMemo memoizes a calculated value and recalculates it only when dependencies change.

// const expensiveValue = useMemo(() => {
//     return numbers.reduce((sum, n) => sum + n, 0);
// }, [numbers]);

// Without useMemo, the calculation can run on every render.

// Interview point:

// useMemo optimizes expensive calculations, but I don't use it unnecessarily because memoization itself has overhead.

// 9. What is a Pseudo - class in CSS ?

//     A pseudo - class defines a special state of an element.

// Common examples:

// : hover
// : focus
// : active
// : first - child
// : nth - child()
// button:hover {
//     background: black;
//     color: white;
// }


// input:focus {
//     border: 2px solid blue;
// }

// Interview point:

// Pseudo - classes select elements based on their state or position.

// 10. Synchronous vs Asynchronous JavaScript

// Synchronous: Executes line by line and waits for each operation.

//     console.log("A");
//     console.log("B");
// console.log("C");

// Output:

// A
// B
// C

// Asynchronous: Allows operations like API calls / timers to complete later.

//     console.log("A");


// setTimeout(() => {
//     console.log("B");
// }, 1000);


// console.log("C");

// Output:

// A
// C
// B

// Interview point:

// JavaScript is single - threaded, but asynchronous operations are handled through mechanisms such as the event loop, Web APIs, and callback queues.

// 11. What is a Promise ?

//     A Promise represents the eventual result of an asynchronous operation.

// It has three states:

// Pending
// Fulfilled
// Rejected
// const promise = fetch("/api/users");


// promise
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Using async / await:

// async function getUsers() {
//     try {
//         const res = await fetch("/api/users");
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }


// 12. Which tools / techniques do you use to optimize React performance ?

//     Answer :

//     I use:

// React.memo
// useMemo
// useCallback
// Lazy loading
// Code splitting
// Virtualization
// Image optimization
// Redux optimization
// React DevTools Profiler
// Chrome DevTools
// Bundle analyzers

// Example:

// const User = React.memo(({ name }) => {
//     return <h1>{name}</h1>;
// });

// Lazy loading:

// const Dashboard = lazy(() => import("./Dashboard"));

// Interview answer:

// I first identify the bottleneck using profiling tools and then apply the appropriate optimization rather than blindly using memoization.

// 13. What AI tools and versions do you use for development ?

//     A good interview answer:

// I use AI development tools such as GitHub Copilot and ChatGPT for code generation, debugging, refactoring, test generation, documentation, and understanding unfamiliar code.I also verify AI - generated code through testing, linting, and code review rather than blindly accepting it.

// If they ask for an exact version, mention the actual version / tool you currently use rather than guessing.

// 14. What is Node.js and how does it work ?

//     Answer :
//     Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run outside the browser.

// It uses:

// V8 Engine
// Event Loop
// Non - blocking I / O
// Asynchronous APIs

// Example:

// const http = require("http");


// http.createServer((req, res) => {
//     res.end("Hello Node.js");
// }).listen(3000);

// Interview point:

// Request → Event Loop → Non - blocking operation → Callback → Response

// 15. What are Jest and Cypress used for?

//     Jest :

//     Used mainly for unit and integration testing.

//         test("adds two numbers", () => {
//             expect(2 + 3).toBe(5);
//         });

// Cypress:

// Used mainly for end - to - end / browser testing.

//     cy.visit("/login");


//     cy.get("#email").type("test@gmail.com");


// cy.get("button").click();

// Interview answer:

// I use Jest / React Testing Library for unit and component testing, and Cypress for end - to - end testing of complete user flows.

// 16. What is a Higher - Order Function ?

//     A Higher - Order Function is a function that:

//     Takes another function as an argument, or
// Returns another function.

//     Example:

// const numbers = [1, 2, 3];


// const result = numbers.map(num => num * 2);


// console.log(result); // [2,4,6]

// map() is a higher - order function because it accepts a function.

// Custom example:

// function multiplyBy(x) {
//     return function (num) {
//         return num * x;
//     };
// }


// const double = multiplyBy(2);


// double(5); // 10
// 17. What is a Pure Function ?

//     A pure function:

//     Gives the same output for the same input.
// Does not modify external data or cause side effects.
// function add(a, b) {
//     return a + b;
// }


// add(2, 3); // 5

// Impure:

// let total = 0;


// function add(value) {
//     total += value;
// }

// React interview point:
// React encourages predictable, side - effect - free rendering and immutable state updates.

// 18. Event Bubbling and Event Capturing

// Suppose:

// <div>
//     <button>Click</button>
// </div>

// Bubbling: Event travels:

// Button → Div → Body → Document

// Capturing: Event travels:

// Document → Body → Div → Button

// React example:

// <div onClick={() => console.log("Parent")}>
//     <button onClick={() => console.log("Child")}>
//         Click
//     </button>
// </div>

// Clicking button normally triggers:

// Child
// Parent

// Stop bubbling:

// <button
//     onClick={(e) => {
//         e.stopPropagation();
//     }}
// >
//     Click
// </button>
// 19. What is the CSS Box Model ?

//     Every HTML element is treated as a box:

// Content
//  ↓
// Padding
//  ↓
// Border
//  ↓
// Margin

// Example:

// .box {
//     width: 200px;
//     padding: 20px;
//     border: 5px solid black;
//     margin: 10px;
// }

// With default content - box:

// Total width = 200 + 40 + 10 = 250px

// Using:

// * {
//     box- sizing: border - box;
// }

// The declared width includes padding and border.

// 20. Shallow Copy vs Deep Copy

// Shallow copy: Copies only the first level.

// const user = {
//     name: "Sai",
//     address: {
//         city: "Bangalore"
//     }
// };


// const copy = { ...user };


// copy.address.city = "Hyderabad";


// console.log(user.address.city);
// // Hyderabad

// Nested object is still shared.

// Deep copy:

// const copy = structuredClone(user);


// copy.address.city = "Hyderabad";


// console.log(user.address.city);
// Bangalore

// Interview point:

// Shallow copy copies references for nested objects, while deep copy creates independent nested objects.

// 21. What are the important ES6 features ?

//     Important ES6 features:

// let / const
//     Arrow functions
// Template literals
// Destructuring
// Spread / rest
// Default parameters
// Classes
// Modules
// Promises
// for...of
// Map
// Set

// Example:

// const user = {
//     name: "Sai",
//     age: 25
// };


// const { name, age } = user;


// const message = `Hello ${name}`;


// 22. What is ESLint ?

//     ESLint is a static code analysis tool that identifies JavaScript / TypeScript code problems and enforces coding standards.

//         Example:

// const name = "Sai"
// console.log(name)

// ESLint can enforce:

// const name = "Sai";
// console.log(name);

// Typical configuration:

// {
//     "rules": {
//         "semi": ["error", "always"],
//             "no-unused-vars": "warn"
//     }
// }

// Interview point:

// ESLint improves code quality, consistency, and catches potential bugs before runtime.

// 23. What is Reconciliation in React ?

//     Reconciliation is React's process of comparing the previous Virtual DOM with the new Virtual DOM and determining the minimum DOM changes required.

// Example:

// Initial:

// <h1>Hello</h1>

// After state update:

// <h1>Hello Sai</h1>

// React compares the old and new trees:

// Old Virtual DOM
//       ↓
// New Virtual DOM
//       ↓
// Compare
//       ↓
// Find changed node
//       ↓
// Update real DOM

// Key interview point:

// Reconciliation helps React efficiently update the UI by determining what actually changed instead of rebuilding the entire DOM.

// Also remember: React uses key props to help identify list elements efficiently.

//     users.map(user => (
//         <User key={user.id} user={user} />
//     ))


// ⭐ Quick Interview Revision ===//

// Topic	One - line answer
// Static	Pre - generated / rendered content
// Spread	Expands values
// Rest	Collects values
// Lifecycle	Mount → Update → Unmount
// useReducer	Complex state management
// Callback	Function passed to another function
//     useState	Simple state
// useQuery	Server - state / API management
// useMemo	Memoizes calculated value
// Pseudo - class Selects element state
// Sync	Executes sequentially
// Async	Executes without blocking
// Promise	Handles async result
// HOF	Takes / returns a function
//     Pure function Same input → same output
// Bubbling	Child → Parent
// Capturing	Parent → Child
// Box model	Content → Padding → Border → Margin
// Shallow copy	Nested references shared
// Deep copy	Nested objects copied
// ES6	Modern JavaScript features
// ESLint	Code quality / static analysis
// Reconciliation	Compares UI trees and updates changed DOM






