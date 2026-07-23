

// Here are the top AWS interview questions with concise answers.

// 1. What is AWS ?

//     Answer :
//     AWS(Amazon Web Services) is a cloud computing platform that provides services like:

// Compute(EC2, Lambda)
// Storage(S3, EBS)
// Databases(RDS, DynamoDB)
// Networking(VPC, Route53)
// Security(IAM)
// Monitoring(CloudWatch)

// Instead of buying physical servers, companies rent cloud resources.

// 2. What is EC2 ?

//     Answer :

//     EC2(Elastic Compute Cloud) is a virtual server in AWS.

// Used to:

// Host Node.js applications
// Host backend APIs
// Run Docker containers
// Install Nginx
// Deploy React applications

// Example:

// Browser
//     │
//     ▼
// EC2(Ubuntu)
//     │
// Node.js
//     │
// MongoDB


// 3. What is S3 ?
//     Answer :
//     S3(Simple Storage Service) is object storage.
// Used for:

// Images
// Videos
// Documents
// Static websites
// Backups

// Example:

// React App
//       │
// Upload Image
//       │
//       ▼
// Amazon S3
// 4. Difference between EC2 and S3
// EC2	S3
// Virtual machine	Storage service
// Runs applications	Stores files
// Has CPU and RAM	No CPU
// Install software	Cannot run code

// 5. What is IAM ?
// Answer :
// IAM(Identity and Access Management) controls who can access AWS resources.
//  Example:

// Developer

// ✅ EC2

// ✅ S3

// ❌ Billing

// 6. What is an IAM Role ?

// Answer :
// A Role gives temporary permissions to AWS services.
// Example

// EC2 needs access to S3.

// Instead of storing AWS credentials inside your application,

//     Attach an IAM Role.

// Much more secure.

// 7. What is VPC ?
// Answer :
// VPC(Virtual Private Cloud) is your own private network inside AWS.
// It contains

// EC2
// Databases
// Load Balancers

// Example

// Internet
//      │
//      ▼
// VPC
//  ├── EC2
//  ├── RDS
//  └── ELB


// 8. Public Subnet vs Private Subnet

// Public

// Internet access
// Web servers
// Load balancers

// Private

// Database
// Internal APIs


// 9. What is Route 53 ?

// AWS DNS service.
// Example

// www.example.com

// ↓

// 54.23.10.12


// 10. What is CloudFront ?

// CloudFront is AWS CDN.
// It caches files closer to users.

// Example

// User in India requests an image.

// Without CDN

// India → USA Server

// With CDN

// India → Mumbai Edge Location

// Much faster.

// 11. What is CloudWatch ?

// Monitoring service.

// Can monitor

// CPU
// Memory
// Logs
// Network
// Errors

// 12. What is Elastic Load Balancer ?

// Distributes traffic across multiple servers.

//                        Users
//                          ↓
//                     Load Balancer
//                    ↙      ↓      ↘
//                 EC2       EC2      EC2

// Benefits
// High Availability
// Scalability

// 13. What is Auto Scaling ?
//  Automatically creates or removes EC2 instances.
//  Example:
//                                 Traffic increases
//                                    100 Users
//                                        ↓
//                                       1 EC2
//                                    After scaling
//                                      5000 Users
//                                          ↓
//                                   5 EC2 Instances


// 14. What is Lambda ?
//  Serverless computing.
// You upload a function.
// AWS runs it only when needed.
// No server management.

// Example:

//                       Upload Image
//                          ↓
//                       Lambda
//                          ↓
//                       Resize Image
//                          ↓
//                       Store in S3


// 15. EC2 vs Lambda
//                 EC2	                     Lambda
//            Always running	          Runs on demand
//            Manage server	              No server
//            Long - running apps	      Short tasks


// 16. What is RDS ?

//     Managed SQL database.
//         Supports
// MySQL
// PostgreSQL
// SQL Server
// MariaDB

// 17. DynamoDB vs MongoDB
// DynamoDB	MongoDB
// AWS NoSQL	Open - source NoSQL
// Fully managed	Self - managed or Atlas
// Key - Value	Document


// 18. What is Elastic Beanstalk ?

//     Deploy applications without manually configuring EC2.
//         Supports
// Node.js
// Java
// Python
// PHP

// 19. What is API Gateway ?
// Creates secure REST APIs.
// Often used with Lambda.

//             Client
//               ↓
//          API Gateway
//               ↓
//             Lambda
//               ↓
//             Database


// 20. How do you deploy a MERN application on AWS ?

//    Typical architecture:

//          React App
//            ↓
//          S3 + CloudFront
//            ↓
//          Node.js Backend
//            ↓
//          EC2
//            ↓
//          MongoDB Atlas

//          Alternative:
//          React
//            ↓
//          Vercel
//            ↓
//          Node.js
//            ↓
//          EC2
//            ↓
//          MongoDB Atlas

//  21. How do you secure an EC2 instance ?
// Use Security Groups
// Disable root login
// Use SSH keys instead of passwords
// Enable HTTPS
// Keep OS updated
// Attach IAM Roles instead of storing access keys


// 22. What are Security Groups ?

//    Virtual firewall for EC2.
//    Example
//    Allow
//    HTTP 80
//    HTTPS 443
//    SSH 22
//    Block everything else.

// 23. What is the difference between Security Groups and NACL ?

// Security Group	NACL
// Instance level	Subnet level
// Stateful	Stateless
// Easier	More advanced


// 24. How do you host a React app on AWS ?

//  Build the project:
// npm run build
// Upload the build files to an S3 bucket.
// Enable static website hosting on the bucket.
// Use CloudFront for caching and HTTPS.
// Point your domain to CloudFront using Route 53.

// 25. What AWS services have you used ?

// For a MERN developer, a strong answer could be:
// "I've used EC2 to host Node.js applications, S3 for storing static assets,
//  IAM for access control, Route 53 for DNS, CloudFront for CDN,
// and CloudWatch for monitoring. I've also deployed React applications using S3 and CloudFront."

//     Most Frequently Asked AWS Services
//          Service	                   Purpose
//          EC2	                       Virtual Server
//          S3	                       File Storage
//          IAM	                       Permissions
//          VPC	                       Network
//          Route 53	               DNS
//          CloudFront	               CDN
//          Lambda                     Serverless
//          RDS	SQL                    Database
//          DynamoDB	               NoSQL Database
//          CloudWatch	               Monitoring
//          ELB	                       Load Balancer
//          Auto Scaling	           Automatic Scaling
//          API Gateway	               API Management
//          Elastic Beanstalk	       Application Deployment