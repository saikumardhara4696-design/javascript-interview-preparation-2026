
// 1. What is useMemo() ?
// 🧠 useMemo: Caching Calculated ValuesThe primary purpose of useMemo is to cache the result of an expensive calculation.
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
//  Caching Function DefinitionsThe primary purpose of useCallback is to cache the actual function
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


// When to use useQuery vs useMutation
// Use useQuery exclusively for reading data(HTTP GET requests).
// Use useMutation for modifying data on the server, such as creating, updating, or deleting resources(HTTP POST, PUT, DELETE requests).























































































































































































