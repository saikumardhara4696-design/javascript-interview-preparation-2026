



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

