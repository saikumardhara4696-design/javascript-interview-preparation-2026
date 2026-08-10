
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
// 