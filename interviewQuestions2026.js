
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
// 14. 
