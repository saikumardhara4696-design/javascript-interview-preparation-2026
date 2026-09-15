# Frontend / MERN Interview Master Notes

> Format for every topic: **Definition → Real-time example → Code example → Key interview points**.
>
> Source-based note: these questions and examples are organized from the uploaded interview notes. I also added a **High-Priority Missing Questions** section based on common Frontend/MERN interviews.

---

# 1. HTML

## Q1. What is HTML?

### Definition
HTML (HyperText Markup Language) is the standard markup language used to structure content on a web page.

### Real-time example
A dashboard can use:
- `<header>` for navigation
- `<main>` for dashboard content
- `<section>` for cards
- `<table>` for reports
- `<form>` for user input

### Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard</title>
</head>
<body>
  <header>Dashboard</header>

  <main>
    <section>
      <h1>Sales Report</h1>
      <p>Today's sales: ₹50,000</p>
    </section>
  </main>
</body>
</html>
```

### Key points
- HTML = structure
- CSS = presentation
- JavaScript = behavior
- Use semantic HTML for accessibility and SEO

---

## Q2. What is the DOM?

### Definition
The DOM (Document Object Model) is the browser's object/tree representation of HTML.

### Real-time example
When JavaScript changes the text of a button, it is interacting with the DOM.

### Code
```html
<button id="loginBtn">Login</button>

<script>
  document.getElementById("loginBtn").textContent = "Logged In";
</script>
```

### Key points
- HTML → DOM
- DOM represents elements as nodes
- JavaScript can read and modify the DOM

---

## Q3. What is semantic HTML?

### Definition
Semantic HTML uses elements whose names describe their purpose.

### Real-time example
Use `<nav>` for navigation instead of a generic `<div>`.

### Code
```html
<header>
  <nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>Product</h1>
    <p>Product description...</p>
  </article>
</main>

<footer>Copyright 2026</footer>
```

### Key points
- Improves accessibility
- Helps SEO
- Makes code easier to maintain

---

# 2. CSS

## Q1. What is CSSOM?

### Definition
CSSOM (CSS Object Model) is the browser's object/tree representation of CSS rules. The browser combines DOM information with computed CSS styles to build the render tree.

### Real-time example
If a CSS rule says `.title { color: blue; }`, the browser computes the style for matching DOM elements before layout and painting.

### Flow
```text
HTML → DOM
CSS  → CSSOM

DOM + CSSOM
     ↓
Style Computation
     ↓
Render Tree
     ↓
Layout
     ↓
Paint
     ↓
Screen
```

### Key points
- DOM = HTML structure
- CSSOM = CSS rules
- Render tree contains visible elements and their computed styles

---

## Q2. What is the CSS style/render tree?

### Definition
After matching CSS rules against DOM elements and calculating their computed styles, the browser builds a render tree containing the visible content that will be laid out and painted.

### Real-time example
A `display: none` element does not participate in the render tree because it is not rendered.

### Code
```html
<h1 class="title">Hello</h1>
```

```css
.title {
  color: blue;
  font-size: 30px;
}
```

### Browser result
```text
h1
├── color: blue
├── font-size: 30px
└── display: block
```

---

## Q3. What is a pseudo-class?

### Definition
A pseudo-class selects an element based on a state or position.

### Real-time example
A login button changes appearance when the user hovers over it.

### Code
```css
button:hover {
  background: black;
  color: white;
}

input:focus {
  border: 2px solid blue;
}

li:first-child {
  font-weight: bold;
}
```

### Key points
Common pseudo-classes:
- `:hover`
- `:focus`
- `:active`
- `:first-child`
- `:nth-child()`

---

## Q4. What is the CSS box model?

### Definition
Every HTML element is treated as a box made of content, padding, border, and margin.

### Real-time example
A product card may have 20px internal padding and 10px spacing outside the card.

### Code
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}

* {
  box-sizing: border-box;
}
```

### Key points
```text
Content → Padding → Border → Margin
```

With default `content-box`:
```text
Total width = 200 + 40 + 10 = 250px
```

With `border-box`, the declared width includes content + padding + border.

---

## Q5. What is Flexbox vs Grid?

### Definition
Flexbox is mainly for one-dimensional layouts. CSS Grid is designed for two-dimensional row/column layouts.

### Real-time example
- Navbar → Flexbox
- Photo gallery/dashboard cards → Grid

### Code
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

---

# 3. JAVASCRIPT

## Q1. What is synchronous vs asynchronous JavaScript?

### Definition
Synchronous code executes in order and waits for the current operation. Asynchronous code allows other work to continue while an operation completes later.

### Real-time example
An API request should not block the browser while waiting for a server response.

### Code
```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

### Output
```text
A
C
B
```

### Key points
JavaScript execution uses the call stack and event loop, with browser/Node.js asynchronous APIs handling operations such as timers and I/O.

---

## Q2. What is a Promise?

### Definition
A Promise represents the eventual success or failure of an asynchronous operation.

### States
- Pending
- Fulfilled
- Rejected

### Code
```js
const promise = fetch("/api/users");

promise
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Async/await
```js
async function getUsers() {
  try {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Real-time example
Fetching dashboard data from a backend API.

---

## Q3. What is a callback function?

### Definition
A callback is a function passed to another function so it can be executed later.

### Real-time example
Passing an event handler to a React button.

### Code
```js
function processUser(name, callback) {
  callback(name);
}

processUser("Sai", (name) => {
  console.log(`Hello ${name}`);
});
```

---

## Q4. What is a higher-order function?

### Definition
A higher-order function takes a function as an argument, returns a function, or both.

### Real-time example
Array methods such as `map`, `filter`, and `reduce`.

### Code
```js
const numbers = [1, 2, 3];

const result = numbers.map((number) => number * 2);

console.log(result); // [2, 4, 6]
```

### Custom example
```js
function multiplyBy(x) {
  return function (number) {
    return number * x;
  };
}

const double = multiplyBy(2);

console.log(double(5)); // 10
```

---

## Q5. What is a pure function?

### Definition
A pure function:
1. Returns the same output for the same input.
2. Does not cause side effects or mutate external state.

### Code
```js
function add(a, b) {
  return a + b;
}
```

### Impure example
```js
let total = 0;

function add(value) {
  total += value;
}
```

### React point
Pure rendering and immutable state updates make React components more predictable.

---

## Q6. What is memoization? How do you handle multiple arguments?

### Definition
Memoization caches a function's result so repeated calls with the same inputs can reuse the cached result.

### Real-time example
An expensive calculation such as filtering or aggregating a large dataset can avoid recalculation when its inputs have not changed.

### Code
```js
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

const add = memoize((a, b, c) => a + b + c);

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2, 3)); // cached
console.log(add(2, 3, 4)); // 9
```

### Interview point
For real applications, choose a cache strategy carefully. `JSON.stringify` is convenient for simple serializable values but is not a universal cache-key solution.

---

## Q7. What is shallow copy vs deep copy?

### Definition
A shallow copy copies the top-level object but keeps references to nested objects. A deep copy creates independent nested structures.

### Code
```js
const user = {
  name: "Sai",
  address: {
    city: "Bangalore"
  }
};

const shallow = { ...user };

shallow.address.city = "Hyderabad";

console.log(user.address.city); // Hyderabad
```

### Deep copy
```js
const deep = structuredClone(user);

deep.address.city = "Hyderabad";

console.log(user.address.city); // Bangalore
```

### Real-time example
When updating nested React state, accidental mutation can create bugs because nested references may still be shared.

---

## Q8. What are important ES6+ features?

### Definition
ES6 introduced major modern JavaScript features; modern interviews usually cover ES6 and later features.

### Important topics
- `let` / `const`
- Arrow functions
- Template literals
- Destructuring
- Spread/rest
- Default parameters
- Classes
- Modules
- Promises
- `for...of`
- Map
- Set
- Optional chaining
- Nullish coalescing
- Async/await

### Code
```js
const user = {
  name: "Sai",
  age: 25
};

const { name, age } = user;

const message = `Hello ${name}, age ${age}`;
```

---

## Q9. What is the difference between NaN and undefined?

### Definition
`undefined` usually means a value has not been assigned. `NaN` means the result of a numeric operation is not a valid number.

### Code
```js
let value;

console.log(value); // undefined

const result = Number("hello");

console.log(result); // NaN
console.log(Number.isNaN(result)); // true
```

### Interview point
`NaN` has the special property that it is not equal to itself:

```js
console.log(NaN === NaN); // false
```

Use `Number.isNaN(value)` to reliably check for `NaN`.

---

## Q10. What is null vs undefined?

### Definition
- `undefined` generally means a value is missing/not assigned.
- `null` is an intentional assignment representing "no value".

### Code
```js
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
```

---

## Q11. What are rest and spread operators?

### Definition
Both use `...`, but their jobs differ.

### Spread = expand
```js
const arr1 = [1, 2];

const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]
```

### Rest = collect
```js
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### Memory trick
```text
Spread = expand
Rest   = collect
```

---

## Q12. What is event bubbling and event capturing?

### Definition
Event propagation has phases. Capturing travels toward the target; bubbling travels from the target back toward ancestors.

### Flow
```text
Capturing:
Document → Body → Div → Button

Bubbling:
Button → Div → Body → Document
```

### React code
```jsx
function App() {
  return (
    <div onClick={() => console.log("Parent")}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          console.log("Child");
        }}
      >
        Click
      </button>
    </div>
  );
}
```

### Real-time example
A table can have one parent click handler and many child buttons. `stopPropagation()` prevents a button click from triggering the row handler.

---

# 4. REACT

## Q1. What is React and how does it work?

### Definition
React is a JavaScript library for building component-based user interfaces.

### Real-time example
A banking dashboard can be divided into:
- Header
- Account summary
- Transactions
- Charts
- Notifications

### Code
```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

### Flow
```text
User action
   ↓
State change
   ↓
React render
   ↓
New element tree
   ↓
Reconciliation
   ↓
Required DOM updates
```

---

## Q2. What is reconciliation in React?

### Definition
Reconciliation is React's process of comparing the previous rendered element tree with the new element tree and determining what needs to change in the UI.

### Real-time example
If only a counter value changes, React determines which DOM output needs updating rather than manually rebuilding the entire page.

### Code
```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>
    </>
  );
}
```

### Keys
```jsx
users.map((user) => (
  <User key={user.id} user={user} />
));
```

### Key point
Keys help React identify list items across renders.

---

## Q3. What are React lifecycle phases?

### Definition
A component goes through mounting, updating, and unmounting. In functional components, `useEffect` is commonly used to synchronize with external systems and perform cleanup.

### Code
```jsx
import { useEffect } from "react";

function App({ count }) {
  useEffect(() => {
    console.log("Effect runs after render");

    return () => {
      console.log("Cleanup before the effect re-runs or component unmounts");
    };
  }, [count]);

  return <h1>{count}</h1>;
}
```

### Common mapping
```text
Class                    Functional
------------------------------------------------
componentDidMount       useEffect(..., [])
componentDidUpdate      useEffect(..., [deps])
componentWillUnmount    cleanup returned by useEffect
```

### Important interview correction
Do not say `useEffect` is literally a one-to-one replacement for every lifecycle method. It is primarily for synchronizing with external systems; lifecycle mapping is only a useful interview analogy.

---

## Q4. What is useState?

### Definition
`useState` is a React Hook used to store local component state.

### Real-time example
Use it for a search box, modal visibility, toggle, or simple counter.

### Code
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Count: {count}
    </button>
  );
}
```

---

## Q5. What is useReducer?

### Definition
`useReducer` manages state using a reducer function and dispatched actions. It is useful when state transitions are complex or related.

### Real-time example
A checkout form may have many actions:
- Add item
- Remove item
- Apply coupon
- Change quantity
- Clear cart

### Code
```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}
```

### Flow
```text
dispatch(action)
      ↓
reducer(state, action)
      ↓
new state
      ↓
render
```

---

## Q6. useState vs useReducer?

| useState | useReducer |
|---|---|
| Simple state | Complex state |
| Direct setter | Action-based updates |
| Less boilerplate | More structured |
| Toggle/input/counter | Complex forms/workflows |

### Interview answer
"I use `useState` for simple local state and `useReducer` when there are multiple related state transitions or complex business rules."

---

## Q7. What is useCallback?

### Definition
`useCallback` memoizes a function reference between renders until its dependencies change.

### Real-time example
A parent passes a callback to a memoized child. Keeping the callback reference stable can prevent unnecessary child renders.

### Code
```jsx
import { memo, useCallback, useState } from "react";

const Button = memo(function Button({ onClick }) {
  return <button onClick={onClick}>Add</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount((value) => value + 1)}>
        Update parent
      </button>

      <Button onClick={handleClick} />
    </>
  );
}
```

### Key point
Do not use `useCallback` everywhere. It is useful when function identity matters, especially with memoized children or hook dependencies.

---

## Q8. What is useMemo?

### Definition
`useMemo` memoizes a calculated value until dependencies change.

### Real-time example
Filtering thousands of products based on a search term.

### Code
```jsx
const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}, [products, search]);
```

### Key point
Use it for meaningful expensive calculations or stable derived values; unnecessary memoization adds complexity and overhead.

---

## Q9. What is useQuery?

### Definition
`useQuery` is not a built-in React Hook. It is commonly provided by TanStack Query and is used to manage server state.

### Real-time example
A dashboard fetching users, caching results, handling loading/error states, and refetching stale data.

### Code
```tsx
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      return response.json();
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load users.</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## Q10. What is a callback in React?

### Definition
A callback can be passed as a prop so a child can trigger behavior defined by the parent.

### Real-time example
A child form sends submitted data to the parent.

### Code
```jsx
function Parent() {
  const handleUser = (name) => {
    console.log(name);
  };

  return <Child onUser={handleUser} />;
}

function Child({ onUser }) {
  return (
    <button onClick={() => onUser("Sai")}>
      Send User
    </button>
  );
}
```

---

## Q11. What are React performance optimization techniques?

### Definition
Performance optimization means identifying actual rendering or loading bottlenecks and reducing unnecessary work.

### Important techniques
- `React.memo`
- `useMemo`
- `useCallback`
- Lazy loading
- Code splitting
- List virtualization
- Image optimization
- Efficient state placement
- Redux selector optimization
- React DevTools Profiler
- Chrome DevTools
- Bundle analyzers

### Code
```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

### Interview answer
"I first profile the application to find the bottleneck, then apply the smallest optimization that solves it."

---

## Q12. What is a higher-order component/function?

### Definition
A higher-order function takes or returns a function. In React, a higher-order component (HOC) is a function that takes a component and returns an enhanced component.

### Code
```jsx
function withAuth(Component) {
  return function ProtectedComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <p>Please log in.</p>;
    }

    return <Component {...props} />;
  };
}
```

### Interview point
HOCs are an older/common React pattern; modern React often prefers hooks and composition.

---

## Q13. What is static rendering/static mode?

### Definition
Static rendering means HTML is generated ahead of time rather than generated dynamically for every request. In modern React applications, this concept is commonly discussed with frameworks such as Next.js.

### Real-time example
A marketing page whose content changes rarely can be statically generated and served quickly.

### Important distinction
"Static mode" is not a standard React feature name by itself. If an interviewer means **React Strict Mode**, that is different: Strict Mode is a development-time feature that helps detect certain problems.

---

## Q14. What is Jest and Cypress?

### Definition
Jest is commonly used for unit/integration testing. Cypress is commonly used for browser-based end-to-end testing.

### Jest
```js
test("adds two numbers", () => {
  expect(2 + 3).toBe(5);
});
```

### Cypress
```js
describe("Login", () => {
  it("logs in", () => {
    cy.visit("/login");
    cy.get("#email").type("test@example.com");
    cy.get("#password").type("password");
    cy.get("button").click();
  });
});
```

### React Testing Library
For React components, React Testing Library is commonly paired with Jest/Vitest to test behavior from the user's perspective.

---

## Q15. Create a photo gallery/grid dashboard.

### Definition
A responsive CSS Grid can display reusable React cards.

### React
```jsx
function Gallery({ photos }) {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <article className="photo-card" key={photo.id}>
          <img src={photo.url} alt={photo.title} />
          <h3>{photo.title}</h3>
        </article>
      ))}
    </div>
  );
}
```

### CSS
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 16px;
}

.photo-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```

### Real-time example
This pattern works for an ecommerce product gallery, employee directory, or media dashboard.

---

# 5. TYPESCRIPT

## Q1. What is TypeScript?

### Definition
TypeScript is a statically typed superset of JavaScript that adds type checking and developer tooling.

### Real-time example
Typing API responses helps catch incorrect property access before runtime.

### Code
```ts
interface User {
  id: number;
  name: string;
  email: string;
}

function getUserName(user: User): string {
  return user.name;
}
```

---

## Q2. What is `<T>` in TypeScript?

### Definition
`<T>` commonly represents a generic type parameter. Generics allow reusable functions/components to preserve type information.

### Real-time example
A reusable API response type can work with users, products, or orders.

### Code
```ts
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(10);
const textValue = identity<string>("Sai");
```

### Generic API example
```ts
interface ApiResponse<T> {
  data: T;
  message: string;
}

type User = {
  id: number;
  name: string;
};

const response: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Sai"
  },
  message: "Success"
};
```

---

## Q3. Interface vs Type?

### Definition
Both can describe object shapes. `interface` is commonly used for extensible object contracts, while `type` can represent unions, intersections, primitives, tuples, and more.

### Code
```ts
interface User {
  id: number;
  name: string;
}

type Product = {
  id: number;
  name: string;
};

type Status = "loading" | "success" | "error";
```

### Extending
```ts
interface Admin extends User {
  permissions: string[];
}
```

### Key point
Do not say one is always better. Choose based on the modeling requirement and team conventions.

---

## Q4. What is `any` vs `unknown`?

### Definition
`any` disables most type checking. `unknown` accepts an unknown value but requires narrowing before unsafe operations.

### Code
```ts
let a: any = "hello";
a.toFixed(); // TypeScript allows it, runtime may fail

let b: unknown = "hello";

if (typeof b === "string") {
  console.log(b.toUpperCase());
}
```

### Interview point
Prefer `unknown` when the type is genuinely unknown.

---

## Q5. What are union and intersection types?

### Definition
- Union (`|`) means one of several types.
- Intersection (`&`) combines multiple types.

### Code
```ts
type ID = string | number;

type User = {
  id: number;
  name: string;
};

type Employee = {
  department: string;
};

type EmployeeUser = User & Employee;
```

---

## Q6. What are TypeScript utility types?

### Definition
Utility types transform existing types into useful variations.

### Code
```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;

type UserUpdate = Partial<User>;

type RequiredUser = Required<User>;

type ReadonlyUser = Readonly<User>;
```

### Important utility types
- `Partial`
- `Required`
- `Pick`
- `Omit`
- `Readonly`
- `Record`
- `ReturnType`
- `Parameters`

---

# 6. NEXT.JS

## Q1. What is Next.js?

### Definition
Next.js is a React framework for building full-stack web applications. It provides routing, server-side capabilities, rendering strategies, data fetching patterns, optimization features, and API/backend functionality.

### Real-time example
An ecommerce application can use:
- Server-rendered product pages
- Static marketing pages
- Dynamic routes
- API/backend logic
- Image optimization

### Code
```tsx
export default function HomePage() {
  return <h1>Welcome to my store</h1>;
}
```

---

## Q2. SSR vs SSG vs CSR?

### Definition
- **SSR**: HTML is generated on the server for a request.
- **SSG**: HTML is generated ahead of time.
- **CSR**: Browser downloads JavaScript and renders/updates the UI on the client.

### Real-time examples
- SSR → frequently changing product/search page
- SSG → documentation/blog/marketing page
- CSR → highly interactive dashboard after login

### Interview point
Modern Next.js supports multiple rendering strategies, and the exact implementation depends on the router and application design.

---

## Q3. What is dynamic routing?

### Definition
Dynamic routing creates routes based on variable path segments.

### App Router example
```text
app/
└── products/
    └── [id]/
        └── page.tsx
```

```tsx
export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1>Product ID: {id}</h1>;
}
```

---

## Q4. What are Server and Client Components?

### Definition
In the Next.js App Router, components are server components by default. A Client Component is used when the component needs client-side interactivity or browser APIs.

### Code
```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((value) => value + 1)}>
      {count}
    </button>
  );
}
```

### Interview point
Use Client Components only where client-side features are needed.

---

## Q5. What is middleware/proxy in Next.js?

### Definition
It is a request-processing layer that can run logic before a request reaches the final route/page. Modern Next.js versions have evolved naming and conventions around this feature, so verify the version-specific API in the project.

### Real-time example
Checking authentication or redirecting a user before reaching a protected route.

---

# 7. SQL

## Q1. What is normalization?

### Definition
Normalization organizes data into related tables to reduce redundancy and improve consistency/integrity.

### Real-time example
Instead of repeating a department manager for every employee, store departments separately and reference them using a foreign key.

---

## Q2. How do you apply normalization?

### Before
```text
Employee
EmpID | Name | Department | Manager
1     | John | HR         | David
2     | Sam  | HR         | David
3     | Mike | IT         | Alice
```

### After
```text
Employee
EmpID | Name | DeptID
1     | John | 1
2     | Sam  | 1
3     | Mike | 2

Department
DeptID | Department | Manager
1      | HR         | David
2      | IT         | Alice
```

---

## Q3. Explain 1NF, 2NF, 3NF.

### 1NF — atomic values
Every cell should contain one value and repeating groups should be removed.

### 2NF — remove partial dependency
The table must be in 1NF and non-key attributes must depend on the whole primary key.

### 3NF — remove transitive dependency
The table must be in 2NF and non-key attributes should depend only on the key, not on another non-key attribute.

### Memory trick
```text
1NF → One value per cell
2NF → Whole key
3NF → Only the key
```

---

## Q4. Primary key vs foreign key?

| Primary Key | Foreign Key |
|---|---|
| Uniquely identifies a row | References a key in another table |
| Must be unique | Can repeat |
| Normally not NULL | May be NULL unless constrained |
| One primary-key constraint per table | Multiple foreign-key constraints possible |

### Code
```sql
CREATE TABLE Department (
  DeptID INT PRIMARY KEY,
  DepartmentName VARCHAR(50),
  Manager VARCHAR(50)
);

CREATE TABLE Employee (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  DeptID INT,
  FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);
```

---

## Q5. SQL vs NoSQL?

| SQL | NoSQL |
|---|---|
| Relational | Non-relational |
| Tables/rows | Documents/key-value/graph/column-family |
| Usually schema-defined | Often flexible schema |
| SQL query language | Database-specific APIs/query languages |
| Strong relational/transactional use cases | Strong flexibility/scalability use cases |

### Examples
SQL:
- MySQL
- PostgreSQL
- SQL Server
- Oracle

NoSQL:
- MongoDB
- Cassandra
- Redis
- CouchDB

### Interview point
Do not say "NoSQL does not support transactions" or "SQL cannot scale." Both statements are too absolute.

---

## Q6. How do you store normalized data?

```sql
INSERT INTO Department (DeptID, DepartmentName, Manager)
VALUES
  (1, 'HR', 'David'),
  (2, 'IT', 'Alice');

INSERT INTO Employee (EmpID, Name, DeptID)
VALUES
  (101, 'John', 1),
  (102, 'Sam', 2),
  (103, 'Mike', 1);
```

---

## Q7. What is a JOIN?

### Definition
A JOIN combines related rows from multiple tables.

### Code
```sql
SELECT
  e.EmpID,
  e.Name,
  d.DepartmentName
FROM Employee e
JOIN Department d
  ON e.DeptID = d.DeptID;
```

### Real-time example
Show employee details together with department names.

---

## Q8. What is an index?

### Definition
An index is a data structure that can speed up lookups at the cost of additional storage and write overhead.

### Code
```sql
CREATE INDEX idx_employee_dept
ON Employee(DeptID);
```

### Real-time example
Index frequently searched columns such as `email`, `user_id`, or foreign keys where appropriate.

---

## Q9. What is a transaction?

### Definition
A transaction groups multiple database operations into a unit that should follow ACID guarantees.

### Real-time example
Money transfer:
1. Debit account A
2. Credit account B
3. Create transfer record

If step 2 fails, step 1 should be rolled back.

---

# 8. NODE.JS / EXPRESS

## Q1. What is Node.js?

### Definition
Node.js is a JavaScript runtime built on Google's V8 engine that lets JavaScript run outside the browser. It uses an event-driven architecture and non-blocking I/O.

### Real-time example
A Node.js API can handle many requests while waiting for database/network I/O.

### Code
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Node.js");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Flow
```text
Request
  ↓
Event Loop
  ↓
Non-blocking I/O
  ↓
Callback / Promise continuation
  ↓
Response
```

---

## Q2. Node.js vs React?

| React | Node.js |
|---|---|
| UI library | JavaScript runtime |
| Mainly frontend | Mainly server/backend |
| Components | APIs/services |
| Browser environment | Server/runtime environment |

---

## Q3. What is Express.js?

### Definition
Express.js is a lightweight web framework commonly used with Node.js to build HTTP APIs and web servers.

### Code
```js
const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Sai" }
  ]);
});

app.listen(3000, () => {
  console.log("Server started");
});
```

---

## Q4. What is middleware?

### Definition
Middleware is a function that runs during the request/response pipeline.

### Real-time example
Authentication middleware checks a JWT before allowing access to a protected API.

### Code
```js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
}

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: "Profile data" });
});
```

---

# 9. SOCKET.IO / REAL-TIME

## Q1. What is Socket.IO and how does it work?

### Definition
Socket.IO is a higher-level real-time communication library that provides event-based, bidirectional communication between clients and a server.

### Real-time example
- Chat
- Live notifications
- Trading dashboard
- Live betting/predictions
- Real-time tracking

### Server
```js
const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
```

### Client
```js
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("message", (data) => {
  console.log("Received:", data);
});

socket.emit("message", {
  text: "Hello"
});
```

### Important methods
```text
emit()       → send event
on()         → listen
off()        → remove listener
disconnect() → close connection
```

### Important distinction
Socket.IO is not the same thing as the native WebSocket API. Socket.IO provides additional features such as events, reconnection, rooms, and acknowledgements.

---

# 10. VITE

## Q1. How do you create a React app with Vite?

### Code
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

### Definition
Vite is a modern frontend build tool and development server. It is not part of React itself.

### Real-time example
Use Vite for a fast React SPA with quick development startup and HMR.

---

## Q2. Why is Vite popular?

### Key points
- Fast development startup
- Fast Hot Module Replacement
- Modern production builds
- Simple configuration
- Good TypeScript/React support

### Alternatives
- Vite
- Next.js
- Webpack
- Other framework/build tooling

Create React App is an older approach and is no longer the preferred choice for new projects.

---

# 11. AI / LLM INTEGRATION

## Q1. How would you explain an AI chatbot architecture in an interview?

### Definition
A client-server AI architecture sends structured user input from the UI to a backend service. The backend validates the request, gathers context/history, calls the AI service, and streams the result back to the UI.

### Real-time example
A support chatbot on an enterprise dashboard can send:
- User message
- Conversation ID
- User/context information
- Current page
- Selected asset
- Active filters

### Architecture
```text
React UI
   ↓
JSON Payload
   ↓
REST API
   ↓
Node.js / Express
   ↓
Validation + Authentication
   ↓
Conversation History / Application Context
   ↓
AI Service
   ↓
Streaming Response
   ↓
React UI
```

### Example request
```js
const payload = {
  message: "Show today's asset alerts",
  conversationId: "conv-123",
  context: {
    page: "monitoring",
    assetId: "asset-42",
    filters: {
      severity: "high"
    }
  }
};

await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
});
```

### Interview answer
"The chatbot was implemented as a client-server architecture. From the React UI, when the user submits a message, we create a structured payload containing the message, conversation ID, user information, and relevant application context. We send it to a Node.js/Express API. The backend validates and authenticates the request, retrieves conversation history and required application data, constructs the AI request, and streams the response back to the React UI so the answer appears incrementally."

---

# 12. ESLINT

## Q1. What is ESLint?

### Definition
ESLint is a static analysis tool that identifies JavaScript/TypeScript problems and enforces coding rules.

### Code
```js
const name = "Sai";
console.log(name);
```

### Example configuration
```json
{
  "rules": {
    "semi": ["error", "always"],
    "no-unused-vars": "warn"
  }
}
```

### Real-time example
ESLint catches unused variables or style violations before code reaches production.

---

# 13. IMPORTANT MISSING INTERVIEW QUESTIONS

The uploaded notes cover many strong topics, but for a **React + TypeScript + MERN** interview I recommend adding these high-priority questions.

## HTML — add these
1. Semantic HTML
2. Block vs inline vs inline-block
3. Forms and validation
4. Accessibility / ARIA
5. `localStorage` vs `sessionStorage` vs cookies
6. SEO basics
7. `async` vs `defer` in script loading
8. `<script>` loading behavior
9. Responsive design and viewport meta tag

## CSS — add these
1. Specificity
2. CSS inheritance
3. Position: static/relative/absolute/fixed/sticky
4. Flexbox
5. Grid
6. Media queries
7. `display: none` vs `visibility: hidden` vs `opacity: 0`
8. z-index and stacking context
9. Responsive design
10. CSS transitions vs animations
11. Reflow vs repaint
12. BEM/CSS Modules

## JavaScript — add these
1. `var` vs `let` vs `const`
2. Hoisting
3. Scope and lexical scope
4. Closure
5. `this`
6. `call`, `apply`, `bind`
7. Prototype and prototypal inheritance
8. Event loop
9. Microtask vs macrotask
10. Debouncing vs throttling
11. Event delegation
12. `==` vs `===`
13. Destructuring
14. Map vs Object
15. Set
16. `map` vs `forEach` vs `filter` vs `reduce`
17. Currying
18. Currying vs partial application
19. AbortController
20. Error handling
21. Garbage collection
22. Modules / CommonJS vs ES Modules

## React — add these
1. Props vs state
2. Controlled vs uncontrolled components
3. `useRef`
4. `useLayoutEffect`
5. `useContext`
6. Custom hooks
7. `forwardRef`
8. `React.memo`
9. Prop drilling
10. Context API vs Redux
11. Redux Toolkit
12. Selectors
13. Immutable state updates
14. Keys in lists
15. Error boundaries
16. Suspense
17. Lazy loading
18. Portal
19. Forms
20. Optimistic UI
21. Server state vs client state
22. React rendering vs re-rendering
23. Why does a component re-render?
24. State batching
25. Stale closures

## TypeScript — add these
1. `any` vs `unknown`
2. `never`
3. `void`
4. Type narrowing
5. Type guards
6. Generics
7. Utility types
8. Union/intersection
9. Enums vs union literals
10. `readonly`
11. Optional properties
12. Function types
13. Generic constraints
14. `keyof`
15. `typeof`
16. Mapped types
17. Conditional types
18. Declaration files
19. Type inference
20. Type assertion vs type annotation

## Next.js — add these
1. App Router vs Pages Router
2. Server Components vs Client Components
3. SSR vs SSG vs ISR vs CSR
4. Dynamic routes
5. Route handlers
6. Middleware/proxy concepts
7. Metadata and SEO
8. Image optimization
9. `next/link`
10. Environment variables
11. Authentication
12. Caching and revalidation
13. Server Actions
14. Loading/error/not-found files
15. Streaming and Suspense
16. Deployment

## Node/Express — add these
1. Event loop
2. Streams
3. Buffers
4. Middleware
5. Authentication/JWT
6. Error-handling middleware
7. REST API design
8. HTTP status codes
9. Rate limiting
10. CORS
11. Helmet/security
12. Validation
13. Logging
14. Worker threads
15. Cluster/load balancing
16. Environment variables
17. Graceful shutdown

## MongoDB/Mongoose — add these
1. Document vs collection
2. Embedding vs referencing
3. Indexes
4. Aggregation pipeline
5. `populate`
6. Transactions
7. Atomic updates
8. Optimistic/concurrent updates
9. Schema validation
10. Mongoose middleware
11. Lean queries
12. Pagination
13. Compound indexes
14. MongoDB vs SQL design decisions

## Testing — add these
1. Unit vs integration vs E2E
2. Jest mocks/spies
3. React Testing Library queries
4. `getBy` vs `queryBy` vs `findBy`
5. Async UI testing
6. Mock Service Worker
7. Cypress fixtures/intercepts
8. Test pyramid
9. Code coverage
10. Testing user behavior instead of implementation details

## AWS — add these
1. EC2
2. S3
3. IAM
4. VPC
5. Load Balancer
6. Auto Scaling
7. CloudFront
8. Route 53
9. RDS
10. CloudWatch
11. Lambda
12. ECS/EKS basics
13. Secrets/environment configuration

---

# 14. MUST-KNOW JAVASCRIPT CODE QUESTIONS

## Reverse a string

```js
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("hello")); // olleh
```

## Find maximum number

```js
function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
```

## Remove duplicates

```js
function removeDuplicates(numbers) {
  const result = [];
  const seen = new Set();

  for (const number of numbers) {
    if (!seen.has(number)) {
      seen.add(number);
      result.push(number);
    }
  }

  return result;
}
```

## Debounce

```js
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

## Throttle

```js
function throttle(fn, delay) {
  let waiting = false;

  return function (...args) {
    if (waiting) return;

    fn(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}
```

---

# 15. MUST-KNOW REACT CODE QUESTIONS

## Counter

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>

      <button onClick={() => setCount((value) => value - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

## Search filter

```tsx
import { useMemo, useState } from "react";

function ProductList({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />

      {filteredProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
}
```

---

# 16. MUST-KNOW TYPESCRIPT + REACT CODE

## Typed props

```tsx
interface UserCardProps {
  id: number;
  name: string;
  isActive: boolean;
}

function UserCard({
  id,
  name,
  isActive
}: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </article>
  );
}
```

## Generic API response

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
}

interface User {
  id: number;
  name: string;
}

async function getUsers(): Promise<ApiResponse<User[]>> {
  const response = await fetch("/api/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
```

---

# 17. MUST-KNOW FULL-STACK INTERVIEW FLOW

A strong MERN answer should connect the technologies:

```text
React / Next.js
      ↓
TypeScript
      ↓
REST API / Socket.IO
      ↓
Node.js + Express
      ↓
Authentication / Validation
      ↓
MongoDB / SQL
      ↓
AWS / Docker / CI-CD
      ↓
Monitoring + Testing
```

For an AI chatbot:

```text
React
 ↓
JSON payload
 ↓
Node/Express API
 ↓
Auth + validation
 ↓
Conversation history
 ↓
LLM/AI service
 ↓
Streaming
 ↓
React UI
```

For real-time systems:

```text
React
 ↕
Socket.IO
 ↕
Node.js
 ↕
Database / external service
```

---

# 18. FINAL 1-LINE REVISION SHEET

```text
HTML       → Structure
DOM        → HTML object tree
CSS        → Presentation
CSSOM      → CSS object tree
Render Tree→ Visible styled elements
JS         → Behavior
Promise    → Async result
Callback   → Function passed to another function
HOF        → Takes/returns a function
Closure    → Function remembers lexical scope
Memoize    → Cache function results
React      → Component-based UI library
State      → Component data
Props      → Parent-to-child data
useEffect  → Synchronize with external systems
useMemo    → Memoize calculated value
useCallback→ Memoize function reference
useReducer → Complex state transitions
useQuery   → Server-state management
Redux      → Global/client state management
TS         → JavaScript + static typing
<T>        → Generic type
Next.js    → React full-stack framework
Vite       → Frontend build tool/dev server
Node.js    → JavaScript runtime
Express    → Node web/API framework
Socket.IO  → Real-time event communication
SQL        → Relational database language
1NF        → Atomic values
2NF        → No partial dependency
3NF        → No transitive dependency
PK         → Unique row identifier
FK         → Relationship to another table
MongoDB    → Document database
Jest       → Unit/integration testing
Cypress    → Browser E2E testing
ESLint     → Static code analysis
```

---

# 19. INTERVIEW ANSWER FORMULA

For almost every question, use this structure:

### 1. Definition
Give a 1–2 sentence definition.

### 2. Real-time example
Explain where you used or would use it in a project.

### 3. Code
Give a small, readable example.

### 4. Key points
Give 2–4 points.

### 5. Project connection
For MERN interviews, connect it to your project:

```text
React UI
→ REST API
→ Node/Express
→ MongoDB
→ Testing
→ Deployment
```

This makes the answer sound practical instead of theoretical.
