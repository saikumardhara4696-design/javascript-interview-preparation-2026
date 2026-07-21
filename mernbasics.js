
//  Basics of FULL STACK (MERN STACK) DEVELOPER QUESTIONS

// A MERN stack developer specializes in using a JavaScript - based toolkit to build full - stack web applications,
//  combining MongoDB, Express.js, React, and Node.js.

//

// General MERN architecture:

// MERN definitions:
// 1. What does MERN stand for?
//  Answer : MongoDB(Database), Express.js(Backend Framework), React(Frontend Library), and Node.js(Backend Runtime Environment).
//
// Data flow:
// 2. How does data move through a MERN application ?
// Answer : The user interacts with the React UI.
// React makes an API request using fetch or axios to the Node.js/Express server.
// The server processes the request, communicates with the MongoDB database to pull or update records,
//  and sends a JSON response back to React to update the view.
//
// SPA concept:
// 3. Why is React referred to as a Single Page Application (SPA)?
// Answer: React loads a single HTML file.
//  Instead of refreshing the page when a user navigates,
//  it dynamically updates the Document Object Model (DOM) by changing components using React Router.

// MongoDB(Database layer)
// SQL vs NoSQL:
// 4. What is the primary difference between MongoDB and MySQL ?
//  Answer : MySQL is a relational database using structured tables with rows and columns.
// MongoDB is a non - relational database that stores data as flexible, schema - less JSON - like documents(BSON).

// Mongoose purpose:
// 5. What is Mongoose and why do we use it ?
//  Answer : Mongoose is an Object Data Modeling(ODM) library for MongoDB and Node.js.
// It manages relationships between data, provides schema validation, and translates code objects into database documents.

// Document ID:
// 6. What is _id in MongoDB ?
// Answer : A unique 12 - byte identifier automatically assigned to every document to serve as its primary key.

// Express.js & Node.js(Server layer):-
// ==================================
//
// Node.js runtime:
// 7. Is Node.js a programming language ?
//  Answer: No.Node.js is an open - source, cross - platform JavaScript runtime
//  environment built on Chrome's V8 engine that allows developers to run JavaScript code outside of a web browser.
//
// Express role:
// 8. What is Express.js?
// Answer: A minimal and flexible Node.js web application framework that provides robust features
//  for building web and mobile applications, specifically making it easier to handle routing and server logic.
//
// Middleware mechanism:
// 9. What is middleware in Express?
// Answer: Functions that have access to the request object (req), the response object (res),
//  and the next middleware function in the application’s request-response cycle.
//  They execute logic, modify requests, or end responses before passing control over using next().

// Package management:
// 10. What is the difference between npm and package.json?
// Answer:
//  => npm is the Node Package Manager used to install third-party libraries.
//  => package.json is a metadata file that lists your project's properties, scripts, and package dependencies.

// React(Frontend layer):-
// =================================
// Virtual DOM:
// 11. How does React's Virtual DOM work?
// Answer: React keeps a lightweight representation of the real DOM in memory.
//  When state changes, React creates a new Virtual DOM tree, compares it to the previous one via diffing,
//  and selectively updates only the changed nodes in the real DOM to boost performance.
//
// State vs Props:
// 12. What is the difference between state and props?
// Answer: State represents local, mutable data managed internally within a component.
// Props (properties) are immutable data passed down from a parent component to a child component.
//
// React Hooks:
// 13. What are Hooks and name two basic ones?
// Answer: Hooks allow functional components to manage state and lifecycle features.
//  Basic ones include useState (for managing local component state) and useEffect
//  (for handling side effects like fetching data or setting up event listeners).


// 14. Why MongoDB uses BSON instead of JSON ?
//  BSON stands for Binary JSON.
//  It is a binary-encoded serialization format used by MongoDB to store documents on disk and transmit them across the network.
//  While developers write queries and view data using human-readable JSON,
//  MongoDB transparently converts it into BSON internally for high-performance processing.

//  Although JSON is an excellent format for exchanging data, it has structural limitations that make it inefficient for direct database operations.
//  BSON solves these limitations through three primary architectural designs:

// Length Prefixes:
//  Every BSON document and field begins with an explicit byte length metadata.
//  This allows the MongoDB database engine to skip irrelevant elements and "jump" directly to a specific field
//  without parsing the entire file sequentially.
//
// Type Tagging:
//  BSON tags every field with its specific data type upfront.
//  The storage engine can instantly determine if a field is a string, integer, or nested array without scanning character - by - character.

// Machine - Optimized Parsing:
//  As a binary format, BSON is significantly faster for computer systems to serialize, deserialize, and traverse than text - based JSON.


// Comparison: JSON vs.BSON
// Feature           JSON                                         BSON
// Format            Text - based, human - readable               Binary - encoded, machine - optimized
// Parsing           SpeedSlower(requires character scanning)     Extremely fast(uses length prefixes)
// Data Types        Limited (String, Number, Boolean,            Extended(Adds ObjectId, Date, Binary Data, etc.)
//                    Array, Object, Null)
// Primary           UseNetwork data interchange and web APIs     Data storage and internal wire protocol in MongoDB






























































































