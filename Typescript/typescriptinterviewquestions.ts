// Absolutely.Since you're preparing for React/Frontend/MERN interviews,
//  here are the most commonly asked TypeScript interview questions,
// with short interview-ready answers + simple code examples.

// 1. What is TypeScript ?

//     Answer :
//     TypeScript is a superset of JavaScript that adds static typing and other features like interfaces, generics, enums, and access modifiers.

// let name: string = "Sai";
// let age: number = 28;

// function add(a: number, b: number): number {
//     return a + b;
// }

// Key point: TypeScript catches many errors during development before the code runs.

// 2. Difference between JavaScript and TypeScript ?
//     JavaScript	TypeScript
// Dynamically typed	Statically typed
// Errors mostly at runtime	Many errors at compile time
// No interfaces	Supports interfaces
// No generics	Supports generics
//     .js.ts / .tsx
// // TypeScript
// let age: number = 25;

// // Error
// age = "25";
// 3. What are the basic types in TypeScript ?
//     let name: string = "Sai";
// let age: number = 25;
// let isActive: boolean = true;

// let value: null = null;
// let data: undefined = undefined;

// let numbers: number[] = [1, 2, 3];
// let names: string[] = ["Sai", "John"];

// Common types:

// string
// number
// boolean
// array
// object
// tuple
// enum
//     any
// unknown
// never
// void
//     4. What is any ?

//         Answer :
//         any disables TypeScript's type checking for that variable.

// let data: any = "Hello";

// data = 100;
// data = true;
// data = {
//     name: "Sai"
// };

// Interview point: Avoid any when possible because it removes type safety.

// 5. What is unknown ?

//     unknown is safer than any.

// let data: unknown = "Hello";

// if (typeof data === "string") {
//     console.log(data.toUpperCase());
// }

// You cannot directly perform operations on unknown until you check its type.

// let value: unknown = "Sai";

// // Error
// // value.toUpperCase();
// any vs unknown
// let a: any = "Sai";
// a.toUpperCase(); // allowed

// let b: unknown = "Sai";
// // b.toUpperCase(); // error

// if (typeof b === "string") {
//     b.toUpperCase(); // allowed
// }

// Remember:
// any = "trust me"
// unknown = "check first"

// 6. What is an interface ?

//     An interface defines the structure of an object.

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// const user: User = {
//     id: 1,
//     name: "Sai",
//     email: "sai@gmail.com"
// };

// Very commonly used in React:

// interface Props {
//     name: string;
//     age: number;
// }

// function UserCard({ name, age }: Props) {
//     return (
//         <div>
//         { name } - { age }
//         </div>
//     );
// }
// 7. Interface vs Type

// Both can define object structures.

//     Interface
// interface User {
//     name: string;
//     age: number;
// }
// Type
// type User = {
//     name: string;
//     age: number;
// };
// Important difference

// Interfaces can be extended:

// interface User {
//     name: string;
// }

// interface Employee extends User {
//     salary: number;
// }

// Types can use intersections:

// type User = {
//     name: string;
// };

// type Employee = User & {
//     salary: number;
// };

// Interview answer:
// "I generally use interfaces for object contracts and types when I need unions, intersections, or more complex type composition."

// 8. What is a union type ?

//     A variable can have multiple possible types.

// let id: string | number;

// id = 101;
// id = "101";

// Example:

// function printId(id: string | number) {
//     console.log(id);
// }
// 9. What is an intersection type ?

//     Intersection combines multiple types.

// type Person = {
//     name: string;
// };

// type Employee = {
//     salary: number;
// };

// type EmployeeDetails = Person & Employee;

// const employee: EmployeeDetails = {
//     name: "Sai",
//     salary: 50000
// };

// Remember:

// Union        → OR
// Intersection → AND
// 10. What is a tuple ?

//     A tuple is an array with a fixed number and order of elements.

// let user: [string, number];

// user = ["Sai", 28];

// This is invalid:

// // user = [28, "Sai"];
// 11. What is an enum?

// Enum is used to define a set of named constants.

// enum Role {
//     ADMIN,
//     USER,
//     GUEST
// }

// let role: Role = Role.ADMIN;

// String enum:

// enum Status {
//     SUCCESS = "SUCCESS",
//     ERROR = "ERROR",
//     LOADING = "LOADING"
// }

// let status: Status = Status.SUCCESS;
// 12. What is a function type?

// You can specify parameter and return types.

// function add(a: number, b: number): number {
//     return a + b;
// }

// Arrow function:

//     const multiply = (a: number, b: number): number => {
//         return a * b;
//     };
// 13. What is optional parameter ?

//     Use?.

// function greet(name: string, age?: number) {
//     console.log(name);
// }

// greet("Sai");
// greet("Sai", 28);

// age is optional.

// 14. What is optional property ?
//     interface User {
//     name: string;
//     age ?: number;
// }

// const user: User = {
//     name: "Sai"
// };
// 15. What is readonly ?

//     It prevents a property from being modified after initialization.

// interface User {
//     readonly id: number;
//     name: string;
// }

// const user: User = {
//     id: 1,
//     name: "Sai"
// };

// user.name = "Kumar";

// // Error
// // user.id = 2;
// 16. What are generics ?

//     Generics allow us to write reusable and type - safe code.

// function identity<T>(value: T): T {
//     return value;
// }

// const name = identity<string>("Sai");
// const age = identity<number>(28);

// Another example:

// function getFirst<T>(items: T[]): T {
//     return items[0];
// }

// const number = getFirst<number>([10, 20, 30]);

// const name = getFirst<string>(["Sai", "John"]);

// Interview answer:
// "Generics allow us to create reusable components or functions while preserving type safety."

// 17. What is type inference?

//     TypeScript can automatically determine the type.

// let name = "Sai";

// TypeScript understands:

// // name: string

// Another example:

// let age = 25;

// // age is inferred as number

// So we don't always need to explicitly write:

// let name: string = "Sai";
// 18. What is type assertion?

//     Type assertion tells TypeScript what type we believe a value has.

// let value: unknown = "Hello";

// let name = value as string;

// console.log(name.toUpperCase());

// Another syntax:

// let name = <string>value;

// In React / TSX, prefer:

// const name = value as string;
// 19. What is void?

//     void is generally used when a function doesn't return a value.

// function printName(name: string): void {
//     console.log(name);
// }
// 20. What is never ?

//     never represents a value that never occurs.

// Common example:

// function throwError(message: string): never {
//     throw new Error(message);
// }

// Another example:

// function infiniteLoop(): never {
//     while (true) { }
// }
// 21. What are access modifiers ?

//     TypeScript provides:

// public
// private
// protected
// class Employee {
//     public name: string;
//     private salary: number;
//     protected department: string;

//     constructor(
//         name: string,
//         salary: number,
//         department: string
//     ) {
//         this.name = name;
//         this.salary = salary;
//         this.department = department;
//     }
// }
// Meaning
// public    → accessible everywhere
// private   → accessible only inside class
//     protected → class + child classes
// 22. What is optional chaining ?

//     Optional chaining?.prevents errors when accessing nested properties.

// const user = {
//     profile: {
//         name: "Sai"
//     }
// };

// console.log(user.profile?.name);

// Example:

// const user = {};

// console.log(user.profile?.name);

// Instead of getting an error, it returns undefined.

// 23. What is nullish coalescing ?

// ?? provides a default value when the value is null or undefined.

// const name = null;

// const result = name ?? "Guest";

// console.log(result);

// Output:

// Guest
//     || vs ??
// const value = 0;

// console.log(value || 10); // 10
// console.log(value ?? 10); // 0

// Interview point: ?? only checks null and undefined.

// 24. What are utility types ?

//     TypeScript provides built -in utility types.

// Important ones:

// Partial
// Required
// Pick
// Omit
// Readonly
// Record
// Partial

// Makes all properties optional.

// interface User {
//     name: string;
//     age: number;
// }

// const user: Partial<User> = {
//     name: "Sai"
// };
// Pick

// Select specific properties.

// type UserName = Pick<User, "name">;
// Omit

// Remove properties.

// type UserWithoutAge = Omit<User, "age">;
// Readonly
// type ReadonlyUser = Readonly<User>;
// 25. What is Record ?

//     Record creates an object type with specific keys and values.

// type Users = Record<number, string>;

// const users: Users = {
//     1: "Sai",
//     2: "John"
// };

// Another common example:

// type UserRoles = Record<string, string>;

// const roles: UserRoles = {
//     admin: "Administrator",
//     user: "Normal User"
// };
// 26. What is type narrowing?

//     Type narrowing means checking the type before using a value.

// function print(value: string | number) {
//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//     } else {
//         console.log(value.toFixed(2));
//     }
// }

// TypeScript understands the type inside each block.

// 27. What is a type guard?

//     A type guard helps TypeScript determine a more specific type.

// function isString(value: unknown): value is string {
//     return typeof value === "string";
// }

// const value: unknown = "Sai";

// if (isString(value)) {
//     console.log(value.toUpperCase());
// }
// 28. How do you type an API response ?

//     Very important for React / MERN interviews.

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// async function getUsers(): Promise<User[]> {
//     const response = await fetch("/api/users");

//     return response.json();
// }

// Usage:

// const users = await getUsers();

// users.forEach(user => {
//     console.log(user.name);
// });
// 29. How do you type React props ?
//     interface UserProps {
//     name: string;
//     age: number;
//     isActive: boolean;
// }

// function UserCard({
//     name,
//     age,
//     isActive
// }: UserProps) {
//     return (
//         <div>
//         <h2>{ name } </h2>
//         < p > { age } </>
//         < p > { isActive? "Active": "Inactive" } </>
//         </div>
//     );
// }

// Usage:

// <UserCard
//   name="Sai"
// age = { 28}
// isActive = { true}
//     />
//     30. How do you type useState in React ?
// const [count, setCount] = useState<number>(0);

// String:

// const [name, setName] = useState<string>("");

// Object:

// interface User {
//     name: string;
//     age: number;
// }

// const [user, setUser] = useState<User | null>(null);

// Array:

// const [users, setUsers] = useState<User[]>([]);
// 31. How do you type an event in React ?

//     Input event:

// const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement>
// ) => {
//     console.log(event.target.value);
// };

// Button event:

// const handleClick = (
//     event: React.MouseEvent<HTMLButtonElement>
// ) => {
//     console.log("Clicked");
// };

// Form submit:

// const handleSubmit = (
//     event: React.FormEvent<HTMLFormElement>
// ) => {
//     event.preventDefault();
// };
// 32. What is keyof ?

//     keyof gets the keys of a type.

// interface User {
//     name: string;
//     age: number;
// }

// type UserKeys = keyof User;

// Now:

// UserKeys

// is:

// "name" | "age"

// Example:

// function getValue(
//     user: User,
//     key: keyof User
// ) {
//     return user[key];
// }

// getValue(user, "name");
// getValue(user, "age");
// 33. What is typeof in TypeScript ?

//     typeof can be used to get the type of an existing variable.

// const user = {
//     name: "Sai",
//     age: 28
// };

// type User = typeof user;

// Now User becomes equivalent to:

// {
//     name: string;
//     age: number;
// }
// 34. What is a discriminated union ?

//     Very useful for React state and API responses.

// type Response =
//     | {
//         status: "success";
//         data: string;
//     }
//     | {
//         status: "error";
//         message: string;
//     };

// function handleResponse(response: Response) {
//     if (response.status === "success") {
//         console.log(response.data);
//     } else {
//         console.log(response.message);
//     }
// }

// TypeScript automatically narrows the correct object.

// 35. interface vs any — interview scenario

// Bad:

// const user: any = response.data;

// console.log(user.name);
// console.log(user.email);

// Better:

// interface User {
//     name: string;
//     email: string;
// }

// const user: User = response.data;

// console.log(user.name);

// Why ?

//     Better autocomplete
// Compile - time checking
// Easier maintenance
// Fewer runtime errors
// 36. What is TypeScript's tsconfig.json?

// tsconfig.json contains TypeScript compiler configuration.

//     Example:

// {
//     "compilerOptions": {
//         "target": "ES2020",
//             "module": "ESNext",
//                 "strict": true,
//                     "jsx": "react-jsx"
//     }
// }

// Important options:

// target
// module
// strict
// noImplicitAny
// strictNullChecks
// jsx
// esModuleInterop
// ⭐ Most Important Questions for Your React Interview

// If you have limited preparation time, focus on these first:

// TypeScript vs JavaScript
// interface vs type
// any vs unknown
// union vs intersection
// Generics
// Type inference
// Type assertion
// Type narrowing
// Type guards
// Utility types
// Partial / Pick / Omit
// keyof
// typeof
//     readonly
// optional properties
// React props typing
// useState typing
// React event typing
// API response typing
// tsconfig.json
// 🧠 Quick memory sheet
// any        → anything
// unknown    → check before use
// union |    → OR
// intersection & → AND
// interface  → object structure
// type       → flexible type definition
// generic    → reusable + type safe
// readonly   → cannot modify
//     ?          → optional
// keyof      → get keys
// typeof     → get type
// never      → never returns
// void       → no return value
// Partial    → everything optional
// Pick       → select properties
// Omit       → remove properties
// Record     → object key / value mapping

// For a 4 - year React / MERN interview,
// I would especially practice Generics + interface vs type +
//  unknown vs any + utility types + React TypeScript coding questions,
// because those are much more likely to lead to follow - up questions than basic syntax.