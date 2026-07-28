
// 1. What is useMemo() ?
// 🧠 useMemo: Caching Calculated Values The primary purpose of useMemo is to cache the result of an expensive calculation.
// It runs the computation once and stores the output.
// React will then reuse that stored value on subsequent renders unless one of its specific dependencies changes.


// Main Use Cases:
// Skipping expensive operations:
// Preventing heavy processes(like sorting a massive array, filtering large datasets, or executing heavy math)
// from repeating on every single button click or input change.

// Maintaining referential equality for objects:
//  In JavaScript, two identical objects or arrays { } are not considered equal by reference.
// If you pass an inline object as a prop to a child component, React treats it as brand new every time,
//  forcing the child to re - render.useMemo preserves the same object reference in memory.

// The filter operation will ONLY re-run if 'items' or 'searchQuery' changes
const filteredList = useMemo(() => {
    return items.filter(item => item.name.includes(searchQuery));
}, [items, searchQuery]);



// 2. What is useCallback() ?
//  useCallback:
//  Caching Function Definitions The primary purpose of useCallback is to cache the actual function
//  instance (its definition/reference) between renders. It does not execute the function;
//  it simply keeps the function from being recreated as a new object in memory.

// Main Use Cases:
// Passing callbacks to optimized child components: 
// If you pass a standard function as a prop to a child component optimized with React.memo, 
// the child will still re - render because it sees a newly created function reference every time the parent updates.
// useCallback stops this by serving the exact same function reference.

// Stable hook dependencies:
//  If you use a custom function inside a hook like useEffect, listing that function in the dependency array
//  can cause the effect to fire endlessly on every render cycle.
//  Wrapping the function in useCallback prevents this infinite loop.
// The function instance remains identical unless 'userId' changes
const handleDelete = useCallback((id) => {
    apiDeleteUser(userId, id);
}, [userId]);


// Quick Comparison Table
// Feature              useMemo                                                    useCallback
// What it caches.      The result of a function (value, object, array).           The function itself(the reference).
// Primary Goal         Avoid repeating heavy data operations                      Avoid breaking referential equality for child component props
// Behind the Scenes    useMemo(() => data, deps)                                  Equivalent to useMemo(() => () => data, deps).


// 3. What is useQuery() or (TanStack Query/ React Query)?
// The primary use of the useQuery hook in TanStack Query(React Query) is to fetch, cache, and synchronize asynchronous
// "server state"(like API data) in React applications without writing manual loading or error boilerplate.

// Instead of combining useEffect and useState to fetch data, useQuery automates the entire process in a declarative way.

// Key Uses and BenefitsAutomatic Caching: 
// Stores retrieved API data in memory using a unique queryKey.
// Subsequent requests for the same data load instantly from the cache instead of making repetitive network calls.

// Built -in State Management:
//  Automatically tracks and returns boolean flags such as isLoading, isError, isFetching,
//   and isSuccess alongside your data, removing the need for manual state definitions.

// Background Data Synchronization:
//  Automatically re - fetches data to keep it fresh when a user re - focuses their browser window,
//  reconnects to the network, or at specified intervals.

// Stale - While - Revalidate:
//  Serves cached data immediately to keep the UI snappy, while simultaneously spinning up a background request to fetch fresh data.

// Request Deduplication:
//  Prevents multiple components on the same page from firing identical network requests at the exact same time.

// Automatic Retries:
//  Retries failed network requests automatically with exponential backoff before throwing an error in the UI.

// Basic Implementation Example:
// To implement useQuery, you pass it an object containing a unique queryKey(to identify and cache the data)
//  and a queryFn(the asynchronous function that retrieves the data)

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 1. Define the asynchronous fetch function
const fetchUsers = async () => {
    const { data } = await axios.get('https://example.com');
    return data;
};

function UserList() {
    // 2. Use the useQuery hook
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    });

    // 3. Handle the UI states automatically
    if (isLoading) return <div>Loading users...</div>;
    if (isError) return <div>Error loading data: {error.message}</div>;

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}


// 4. When to use useQuery vs useMutation
// Use useQuery exclusively for reading data(HTTP GET requests).
// Use useMutation for modifying data on the server, such as creating, updating, or deleting resources(HTTP POST, PUT, DELETE requests).



// 5. What are Controlled and UnControllable components?

// ========================= //
// Controlled Components:-

// Controlled components are form elements(like input, textarea, or select) that are managed by React state.
// This means that the value of the form element is set and updated through React state, making React the "single source of truth" for the form data.

// In this example:
import React, { useState } from 'react';

function ControlledComponent() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
export default ControlledComponent;

// The value state holds the current value of the input field.
// The handleChange function updates the state whenever the user types in the input field.
// The handleSubmit function handles the form submission, using the current state value.


// ========================================//
// UnControlled Components:-

// Uncontrolled components in React manage their own state internally rather than relying on React state.
// This approach is useful for simple forms where you don't need to manipulate the input data through React state updates.

// Example code:-
import React, { Component } from 'react';

class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        // Create a ref to hold the input DOM element
        this.inputRef = React.createRef();
        // This is the UnControlled data. bcz it will take internal or current state directly from DOM element.

    }

    handleSubmit = () => {
        // Access the input value using the ref
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                {/* Use ref attribute to attach the ref to the input element */}
                <input
                    type="text"
                    ref={this.inputRef}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

// Ref Usage: In uncontrolled components, we use the ref attribute to create a reference(this.inputRef) to the DOM node of the input field.

// Handling Input: When the user enters data and clicks "Submit", this.inputRef.current.value allows us to
//  directly access the current value of the input field without involving React state.

// Advantages: Uncontrolled components can be simpler and faster for basic form handling.
// They are often used when the form data is not needed in React state for any processing or validation.

// Key Points:

// Internal State: Uncontrolled components manage their state internally with the help of refs, not with React state updates.
// Direct DOM Access: Accessing form data is done directly through DOM refs(this.inputRef.current.value).
// Simplicity: They are straightforward for simple forms where real - time validation or complex form interactions are not necessary.

// => Uncontrolled components are handy in scenarios where you want a lightweight approach to handling form data without the overhead of managing state in React.

// 6. What is Higher Order Components?
// => ReactJS Higher - Order Components:-
// Higher - order components(HOC) are an advanced technique in React that is used for reusing component logic.
// It is the function that takes the original component and returns the new enhanced component.

// It doesn’t modify the input component directly.Instead, they return a new component with enhanced behavior.
// They allow you to reuse component logic across multiple components without duplicating it.
// They are pure functions that accept a component and return a new component.

// Syntax:

// const EnhancedComponent = higherOrderComponent(OriginalComponent);
// A Higher - Order Component takes a component as input.
// It returns a new component with added functionality.
// The new component behaves like the original but with extra features.

// ================MAIN COMPONENT APP.JS===============//

import React from "react";
import "./App.css";
import withName from './Components/Name'; // Import the HOC
// Functional component
const App = (props) => {
    return <h1>{props.name}</h1>;
};
// Wrap the App component with the HOC to create the enhanced version
const EnhancedComponent = withName(App);
// Export the enhanced component
export default EnhancedComponent;
// ================MAIN COMPONENT APP.JS===============//

//========== HIGHER ORDER (COMMON) COMPONENT==========//
import React from 'react';
// Higher-Order Component (HOC) as a functional component
const withName = (OriginalComponent) => {
    const NewComponent = (props) => {
        return <OriginalComponent {...props} name="Higher Order Component" />;
    };
    return NewComponent;
};
export default withName;
//========== HIGHER ORDER (COMMON) COMPONENT==========//

// 7. What is Pure Component?
// when functions returns same output when same input is passed is called Pure functions.
// It is like returning same data for same input.So in pure function output only depend on its input arguments.
// Pure functions does not produced any side effects as well.
// For example:
function Add(num1, num2) {
    return num1 + num2;
}


// 8. What are Props and State ?





















































































































































































