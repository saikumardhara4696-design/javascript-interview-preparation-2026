



// SQL SETUP IN SYSTEM

//  STEP 1 :
// => COPY this path
// C: \Program Files\MySQL\MySQL Server 8.0\bin
//       FILEMANAGER
//        |
//       THIS PC
//        |
//       OS(C:)
//         |
//       Program Files
//         |
//       MySQL
//         |
//       MySQL Server 8.0
//          |
//       bin

// STEP 2 :
// => OPEN Environment variables in your system (search in windows search bar)

// Environment Variables
//    |
//    |=> Path
//    |    |
//    |    |=> C: \Program Files\MySQL\MySQL Server 8.0\bin


// ADD THIS LINE IN PATH VARIABLE
// create a new variable with "name" "Path" and value as C: \Program Files\MySQL\MySQL Server 8.0\bin


// STEP 3 : Test from the bin folder

// Open Command Prompt and run:

// check the path is correct or not by running the command:
// if not , paste this cmd
// cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"

// Then run:
// mysql - u root - p
// Enter the password you set during installation and you will be logged in to MySQL command line interface.


// 1. What is SQL ?
// Interview Answer(30 seconds)

// SQL(Structured Query Language) is a standard language used to interact with relational databases.
// It is used to create database objects, insert, update, delete, and retrieve data.
// SQL also helps manage relationships between tables using primary and foreign keys and supports transactions to maintain data consistency.

// Interview Points to Remember:-

// SQL = Structured Query Language
// Used with relational databases.
// Main operations: CREATE, INSERT, SELECT, UPDATE, DELETE.
// Supports relationships through Primary Keys and Foreign Keys.


// 2. What are the types of SQL Commands?
// Types of SQL Commands:-
// Type	Purpose	Examples
// DDL(Data Definition Language)	Defines database structure	CREATE, ALTER, DROP, TRUNCATE
// DML(Data Manipulation Language)	Manipulates data	INSERT, UPDATE, DELETE
// DQL(Data Query Language)	Retrieves data	SELECT
// DCL(Data Control Language)	Controls permissions	GRANT, REVOKE
// TCL(Transaction Control Language)	Manages transactions	COMMIT, ROLLBACK, SAVEPOINT

// Command categories:
// DDL → Structure
// DML → Data changes
// DQL → Data retrieval
// DCL → Permissions
// TCL → Transactions
// SQL(Structured Query Language) is a standard language used to store, retrieve, update,
// and delete data in a Relational Database Management System(RDBMS) such as MySQL, PostgreSQL, Oracle, SQL Server, and SQLite.



// 3. What can SQL do?
// Create databases and tables.
// Insert data.
// Retrieve data.
// Update data.
// Delete data.
// Create relationships between tables.
// Manage users and permissions.

// Example Table
//    Employee
//    EmpID	    Name	Salary
//    101	    John	50000
//    102	    Sam	    60000
//    103	    Mike	70000


// 4. Common SQL Commands ?
// Create Table:-
// CREATE TABLE Employee(
//     EmpID INT PRIMARY KEY,
//     Name VARCHAR(50),
//     Salary INT
// );

// Insert Data:-
// INSERT INTO Employee(EmpID, Name, Salary)
// VALUES(101, 'John', 50000);


// Retrieve Data:-
// SELECT * FROM Employee;

// Update Data:-
// UPDATE Employee
// SET Salary = 55000
// WHERE EmpID = 101;

// Delete Data:-
// DELETE FROM Employee
// WHERE EmpID = 101;


// 5. How SQL Works?
// Application
//       │
//       ▼
// SQL Query
//       │
//       ▼
// Database Server
//       │
//       ▼
// Processes Query
//       │
//       ▼
// Returns Result


// 6. What are the Advantages of SQL?

// Easy to learn.
// Fast for querying structured data.
// Supports relationships between tables.
// Ensures data integrity using keys and constraints.
// Supports transactions (ACID properties).




// 7. What is JDBC ?

//   JDBC(Java Database Connectivity) is a Java API that allows Java applications to connect to databases, execute SQL queries, and retrieve results.

// It acts as a bridge between a Java application and a database such as MySQL, PostgreSQL, Oracle, or SQL Server.

// How JDBC Works
// Java Application
//        │
//        ▼
//      JDBC API
//        │
//        ▼
//  JDBC Driver(MySQL, Oracle, etc.)
//        │
//        ▼
// Database


// Steps:-
// Load the JDBC driver.
// Establish a connection to the database.
// Create a statement.
// Execute SQL queries.
// Process the results.
// Close the connection.
// JDBC Architecture


// Java Program
//       │
// Connection
//       │
// Statement / PreparedStatement
//       │
// Execute SQL
//       │
// ResultSet


// Example
// A. Connect to MySQL
// import java.sql.*;

// public class Demo {
//     public static void main(String[] args) throws Exception {

//         String url = "jdbc:mysql://localhost:3306/company";
//         String user = "root";
//         String password = "root";

//         Connection con = DriverManager.getConnection(url, user, password);

//     System.out.println("Connected Successfully");

//     con.close();
// }
// }


// B. Read Data
// Statement stmt = con.createStatement();

// ResultSet rs = stmt.executeQuery("SELECT * FROM employee");

// while (rs.next()) {
//     System.out.println(rs.getInt("id") + " " + rs.getString("name"));
// }


// C. Insert Data
// PreparedStatement ps = con.prepareStatement(
//     "INSERT INTO employee(name, salary) VALUES(?, ?)"
// );

// ps.setString(1, "John");
// ps.setInt(2, 50000);
// ps.executeUpdate();


// Main JDBC Interfaces ?
// Interface	Purpose
// DriverManager	Creates database connections
// Connection	Represents a database connection
// Statement	Executes simple SQL queries
// PreparedStatement	Executes parameterized queries(recommended)
// CallableStatement	Calls stored procedures
// ResultSet	Stores query results



// Statement vs PreparedStatement:-
// Statement	                          PreparedStatement
// SQL is written directly	              Uses ? placeholders
// Slower for repeated queries	          Faster for repeated execution
// Vulnerable to SQL Injection	          Helps prevent SQL Injection
// Less efficient	                      More efficient


// Advantages of JDBC
// Connects Java applications to databases.
// Supports multiple databases(MySQL, Oracle, PostgreSQL, SQL Server).
// Executes SQL queries(SELECT, INSERT, UPDATE, DELETE).
// Supports transactions.
// Database - independent API(you mainly change the JDBC driver and connection URL).


// Interview Answer(30 seconds)

// JDBC(Java Database Connectivity) is a Java API that enables Java applications to communicate with relational databases.
// It provides interfaces like Connection, Statement, PreparedStatement, and ResultSet to connect to a database,
// execute SQL queries, and process results.JDBC works through a JDBC driver, which translates Java calls into database - specific commands.

// Interview Points to Remember
// JDBC = Java Database Connectivity
// Used to connect Java applications to databases.
// Uses a JDBC Driver.
// Core objects:
// DriverManager
// Connection
// Statement
// PreparedStatement
// ResultSet
// PreparedStatement is preferred because it is more secure and efficient than Statement.
// Typical flow:
// Load Driver → Connect → Execute Query → Read Result → Close Connection



// 8. What is Normalization in SQL?
// Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
// It involves dividing large tables into smaller, related tables and defining relationships between them using primary and foreign keys.


// 9. What is Database?

// A Database is an organised collection of data that is stored and accessed electronically.
// It provides a systematic way to store, manage, and retrieve information.

// 10. What is the difference between Primary Key and Foreign Key?
// Primary Key: A primary key is a unique identifier for a record in a table.
// It ensures that each record can be uniquely identified and cannot contain NULL values.

// Foreign Key: A foreign key is a field (or collection of fields) in one table that refers to the primary key in another table.
// It establishes a relationship between the two tables and can contain NULL values unless constrained otherwise.

// Example Table
// Employee
// EmpID	Name	DeptID
// 101	John	1
// 102	Sam	    2
// 103	Mike	1

// Department
// DeptID	Department	Manager
// 1	     HR	        David
// 2	     IT	        Alice

// 11. What is the difference between 1NF, 2NF, and 3NF?

// 1NF(First Normal Form): Ensures that each column contains atomic values and that each record is unique.
// It eliminates repeating groups and arrays.
// 2NF(Second Normal Form): Achieved when a table is in 1NF and all non-key attributes are fully functionally dependent on the primary key.
// 3NF(Third Normal Form): Achieved when a table is in 2NF and all attributes are only dependent on the primary key,
// eliminating transitive dependencies.

// 12. What is the difference between SQL and NoSQL?
// SQL databases are relational, use structured query language, and have a predefined schema.
// They are suitable for complex queries and transactions.
// NoSQL databases are non-relational, can store unstructured data, and have dynamic schemas.
// They are suitable for large-scale data storage and real-time applications.

// 13. What is the difference between SQL and MySQL?
// SQL is a language used to manage and manipulate relational databases.
// MySQL is a relational database management system (RDBMS) that uses SQL as its query language.
// In other words, SQL is the language, while MySQL is the software that implements it.

// 14. What is DBMS?
// DBMS(Database Management System) is software that provides an interface to interact with databases.
// It helps in data storing, retrieving, and managing data efficiently.

// 15. What is RDBMS?
// RDBMS(Relational Database Management System) is a type of DBMS that stores data in tables with rows and columns.
// It supports relationships between tables using primary and foreign keys and ensures data integrity through constraints.

// 16. What is the difference between DBMS and RDBMS?
// DBMS	                                    RDBMS
// Manages databases                        Manages relational databases
// Data stored in files or objects          Data stored in tables with rows and columns
// No support for relationships             Supports relationships using keys
// Less secure and less scalable            More secure and scalable
// Examples: FileMaker, Microsoft Access	Examples: MySQL, PostgreSQL, Oracle, SQL Server

// 17. What are the Types of DBMS?
// 1. Hierarchical DBMS: Organizes data in a tree-like structure, where each record has a parent-child relationship.
// 2. Network DBMS: Organizes data in a graph structure, allowing many-to-many relationships between records.
// 3. Relational DBMS (RDBMS): Organizes data in tables with rows and columns, supporting relationships through keys.
// 4. Object-oriented DBMS: Stores data as objects, similar to object-oriented programming concepts.
// 5. Document-oriented DBMS: Stores data in document formats like JSON or XML, suitable for semi-structured data.
// 6. Key-Value Store: Stores data as key-value pairs, allowing fast retrieval based on keys.
// 7. Columnar DBMS: Stores data in columns rather than rows, optimizing analytical queries and aggregations.

// Majorly Two types of DBMS are used in the industry:-
// TYPES OF DBMS:
// Relational DBMS (RDBMS):-
// Based on tables(relations)consists of Organizes data in tables with rows and columns.
// Example: - MySQL, PostgreSQL, Oracle, SQL Server

// Non Relational DBMS (NoSQL):-
// Uses models like documents, key-value pairs, columnar or graphs.
// Based on collections instead of tables.
// Example: - MongoDB, Cassandra, DynamoDB, Redis, Couchbase



// 18. What are Data Types in SQL?
// Data types define the type of data that can be stored in a column of a table.

// Common SQL Data Types:
// Data                             Type	      Purpose	   Example
// INT	                            Integer       values       1, 42, -7
// VARCHAR(Variable-length string)	Text          values	   'Hello', 'John Doe'
// CHAR(Fixed-length string)	    Text          values	   'Y', 'N'
// DATE                         	Date          values	   '2024-01-01'
// DATETIME	                        Date and time  values	   '2024-01-01 12:30:00'
// BOOLEAN	                        True/False    values	    TRUE, FALSE
// DECIMAL(Precision, Scale)	    Decimal        values	    DECIMAL(10, 2) for 12345678.90
// FLOAT	                        Floating-point  values	    3.14, -0.001
// TEXT	                            Large text      values	    'This is a long text...'
// BLOB(Binary Large Object)	Binary data	Images, audio files, etc.


// 19. What are Constraints in SQL?
// Constraints are rules applied to columns in a table to enforce data integrity and consistency.
// Common SQL Constraints:
// Constraint	Purpose
// PRIMARY KEY	Ensures unique and non-null values for a column
// FOREIGN KEY	Establishes a relationship between two tables
// UNIQUE	Ensures all values in a column are unique
// NOT NULL	Prevents null values in a column
// CHECK	Ensures values meet a specific condition
// DEFAULT	Provides a default value for a column if none is specified
// AUTO_INCREMENT	Automatically generates a unique value for a column (commonly used for primary keys)


// . What is Indexing in SQL?
// Indexing is a technique used to improve the speed of data retrieval operations on a database table.
// An index is created on one or more columns of a table, allowing the database
// to find rows more quickly without scanning the entire table.
// Indexes can be created using the CREATE INDEX statement and can be unique or non-unique.
// However, while indexes speed up read operations,
//  they can slow down write operations (INSERT, UPDATE, DELETE) because the index must also be updated.