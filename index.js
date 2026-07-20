
// CHECKED PROPERTIES

document.getElementById("myButton").addEventListener("click", function () {
    var inputValue = document.getElementById("myInput").value;
    var isChecked = document.getElementById("myCheckbox").checked;
    var selectedRadio = document.querySelector("input[name='radiocard']:checked");

    window.alert("You entered: " + inputValue + "\nCheckbox is checked: " + isChecked + "\nSelected city: " + (selectedRadio ? selectedRadio.nextElementSibling.textContent : "None"));

}
)

// TERINARY OPERATORS

let age = 18;
let message = age >= 18 ? "You are a Major" : "You are a Minor"
console.log(message) // You are a Major

let time = 9;
let greet = time > 12 ? "happy birthday" : "Advance happy Birthday"
console.log(greet) // "Advance happy Birthday"

let purchaseamount = 120;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(` your Total amount is ${purchaseamount - purchaseamount * (discount / 100)}`) // your Total amount is 108



//  SWITCH STATEMENT

// let day = 1;
let day = new Date().getDay(); // 0-6 (0 is Sunday, 1 is Monday, etc.)
console.log("Today is: " + day);
switch (day) {

    case 0:
        console.log("Its Sunday")
        break;
    case 1:
        console.log("Its Monday")
        break;
    case 2:
        console.log("Its Tuesday")
        break;
    case 3:
        console.log("Its Wednesday")
        break;
    case 4:
        console.log("Its Thursday")
        break;
    case 5:
        console.log("Its Friday")
        break;
    case 6:
        console.log("Its Saturday")
        break;
    default:
        console.log("Invalid day")
}
// Its Monday

let testScore = 85;
// when we have multiple conditions to check, 
// here we are passing the conditions in the case statements and using true in the switch statement to evaluate them
switch (true) { //  here we use true to evaluate the conditions in the cases
    case (testScore >= 90):
        console.log("Grade: A");
        break;
    case (testScore >= 80):
        console.log("Grade: B");
        break;
    case (testScore >= 70):
        console.log("Grade: C");
        break;
    case (testScore >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
} // Grade: B



// STRING SLICING
// => create a substring from a portion of another string
const fullName = 'sai kumar'
// console.log(fullName.slice(3, 9)) // kumar

// console.log(fullName.slice(4)) // kumar
// console.log(fullName.slice(-5)) // kumar
// console.log(fullName.slice(0, 3)) // sai
// console.log(fullName.slice(-1)) // r
// console.log(fullName.slice(-3, -1)) // ma

let firstName = fullName.slice(0, fullName.indexOf(' '));
// first space is at index 3
// J  o  h  n     D  o  e
// 0  1  2  3  4  5  6  7
//          ^
//          first space

let lastName = fullName.slice(fullName.indexOf(' ') + 1);
// first space is at index 3, so we start slicing from index 4
// 4 + 1 = 5
// J  o  h  n     D  o  e
// 0  1  2  3  4  5  6  7
//                ^
//              starts here
console.log("First Name: " + firstName); // sai
console.log("Last Name: " + lastName); // kumar


// METHOD CHAINING
// => Method chaining is a programming technique where multiple methods are called on the same object in a single line of code.
//  This is often used to improve code readability and reduce the number of lines of code.

// let userName = window.prompt("Enter your name: ");
// userName = userName.trim()  // it will remove the white spaces from the start and end of the string
// console.log("userName", userName)
let methodChaining = "   sai Kumar   ";
methodChaining = methodChaining.trim(); // it will remove the white spaces from the start and end of the string
let letters = methodChaining.charAt(0); // it will return the first character of the string (s)
// letters = letters.toUpperCase(); // it will convert the character to uppercase (s => S)
console.log("First letter of the name is: " + letters) // First letter of the name is: S

let extraCharacters = methodChaining.slice(1); // it will return the string from index 1 to the end (ai kumar)
extraCharacters = extraCharacters.toLowerCase(); // it will convert the string to lowercase (ai kumar)  
console.log("Extra characters of the name are: " + extraCharacters) // Extra characters of the name are: ai kumar

// Simple or shortest way to do the above method chaining is:
let methodChaining2 = "   sai Kumar   ";
let firstLetter = methodChaining2.trim().charAt(0).toUpperCase() + methodChaining2.trim().slice(1).toLowerCase();

console.log("First letter of the name is: " + firstLetter); // First letter of the name is: Sai kumar
// here were trimmed the string,
//  got the first character, converted it to uppercase,
// sliced the rest of the string,
// and converted it to lowercase, all in one line of code.


// LOGICAL OPERATORS

//  Logical operators are used to combine multiple conditions and return a boolean value (true or false)
//  based on the evaluation of those conditions. The most common logical operators in JavaScript are:

// AND = &&
// The AND operator returns true if both conditions are true.
const temp = 25;
if (temp > 20 && temp < 30) {
    console.log("The temperature is between 20 and 30 degrees.");
} else {
    console.log("The temperature is not between 20 and 30 degrees.");
}

// OR =  ||  
// The OR operator returns true if at least one of the conditions is true.
if (temp < 20 || temp > 30) {
    console.log("The temperature is Bad.");
} else {
    console.log("The temperature is Good.");
}
// NOT = !
// The NOT operator negates the value of a condition, returning true if the condition is false, and vice versa.
// For example, if a variable is true, using the NOT operator will make it false, 
// and if it is false, using the NOT operator will make it true.
const isRaining = false;
// (!isRaining) will return true because isRaining is false
if (!isRaining) {
    console.log("It is not raining.");
}


// WHILE LOOP

// The while loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition.

// let userInput = 'sai';
// while (userInput === '') {
//     console.log('while loop is running');
// }
// In this example, the while loop will continue to run as long as the userInput variable is an empty string.
// The loop will keep printing "while loop is running" to the console until the userInput variable is changed to a non-empty string.
// Note: Be careful when using while loops, as they can lead to infinite loops if the condition never becomes false.
console.log('while loop has ended'); //this console.log statement will never execute untill the while condition false.
// So make sure to change the userInput variable to a non-empty string to break the loop and allow the program to continue executing.


let count = 0; // variable declaration and initialization
while (count < 5) { // while loop condition
    console.log("WHILE Count is: " + count); // printing the value of count variable in each iteration
    count++;   // incrementing the count variable by 1 in each iteration
}
// here we are using number variable count to keep track of the number of iterations.
// The loop will continue to run as long as count is less than 5.

let tablecount = 1; // variable declaration and initialization
while (tablecount < 10) { // while loop condition
    console.log("WHILE Table Count is: " + 1 + " x " + tablecount + " = " + (1 * tablecount));
    tablecount++;
}

// let tablestarcount = 1;
// let rows = 10;
// while (tablestarcount < rows) {

//     let stars = "";
//     let j = 0;
//     while (j < tablestarcount) {
//         stars += "*"
//         j++
//     }
//     console.log(stars)
//     tablestarcount++;
// }
// Result of the above code will be:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********



// let rows = 1;
// let i = 10;
// while (rows <= 10) { // 10 times loop will run
//     let stars = '';
//     let j = 1;
//     while (j <= i) { // again 10 times i need loop to print 10 stars in each row
//         stars += "*" // untill j became 10, it will keep adding * to the stars variable
//         j++  // incrementing the j variable by 1 in each iteration
//     }
//     console.log(stars)
//     rows++  // incrementing it will create new loop after 10 stars printed
//     i-- // decrementing the i variable by 1 in each iteration to decrease the number of stars.

// }
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *



let rows = 1;
let i = 10;
while (rows <= 10) { // 10 times loop will run
    let n = 0;
    let stars = '';
    let j = 1;
    let space = '';
    while (i < 10 && n < rows) {
        space += ' '
        n++
    }
    stars += space;
    while (j <= i) {
        stars += "*"
        j++
    }
    console.log(stars)
    rows++
    i--

}

// **********
//   *********
//    ********
//     *******
//      ******
//       *****
//        ****
//         ***
//          **
//           *
// DO ...WHILE LOOP

// The do...while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, 
// even if the condition is false. The syntax for a do...while loop is as follows:

let docount = 0; // variable declaration and initialization
do {
    console.log("DO WHILE Count is: " + docount); // printing the value of docount variable in each iteration
    docount++;   // incrementing the docount variable by 1 in each iteration
} while (docount < 5); // while loop condition


// FOR LOOP

// The for loop is a control flow statement that allows code to be executed
//  repeatedly based on a given boolean condition.

// The syntax for a for loop is as follows:
// for (initialization; condition; increment / decrement) {
// code block to be executed
// }

for (let i = 0; i <= 10; i++) { // initialization, condition, increment
    console.log("FOR Loop Count is: " + i); // printing the value of i variable in each iteration
}

for (let i = 2; i <= 10; i += 2) {
    console.log("FOR Loop Even Count is: " + i); // printing the value of i variable in each iteration
}

for (let i = 1; i <= 20; i += 2) {
    console.log("FOR Loop Odd Count is: " + i); // printing the value of i variable in each iteration
}

for (let i = 10; i > 0; i--) {
    console.log("FOR Loop Reverse Count is: " + i); // printing the value of i variable in each iteration
}

// CONTINUE STATEMENT IN FOR LOOP
// Below is an example of using the continue statement in a for loop.
// When we need to skip the particular iteration of the loop based on a condition, we can use the continue statement.
//  we use continue; for i == 6. so it won't print the value 6.
for (let i = 1; i <= 10; i++) {

    if (i == 6) {
        continue; // skip the current iteration if the condition is true
    } else {
        console.log("FOR Loop Count is: " + i); // printing the value of i variable in each iteration
    }
}
// FOR Loop Count is: 1
// FOR Loop Count is: 2
// FOR Loop Count is: 3
// FOR Loop Count is: 4
// FOR Loop Count is: 5
// FOR Loop Count is: 7
// FOR Loop Count is: 8
// FOR Loop Count is: 9
// FOR Loop Count is: 10



// BREAK STATEMENT IN FOR LOOP

// Below is an example of using the break statement in a for loop.
// When we need to exit the loop based on a condition, we can use the break statement.
//  we use break; for i == 6. so it will exit the loop when i == 6.
for (let i = 1; i <= 10; i++) {

    if (i == 6) {
        break; // exit the loop if the condition is true
    } else {
        console.log("FOR Loop Count is: " + i); // printing the value of i variable in each iteration
    }
}
// FOR Loop Count is: 1
// FOR Loop Count is: 2
// FOR Loop Count is: 3
// FOR Loop Count is: 4
// FOR Loop Count is: 5
// Here the loop will exit when i == 6, so it won't print the value 6 and future iterations of the loop will end.


// FUNCTIONS

// A function is a block of code that performs a specific task. 
// It can take input in the form of parameters and can return an output. 
// Functions help to organize code, make it reusable, and improve readability.

function greetings(name) { // function declaration
    return "Hello, " + name + "!"; // function body
}
greetings("sai"); // this how we do function call, we can pass the argument to the function
console.log(greetings("sai")); // Hello, sai!

function addNumbers(a, b) { // function declaration with parameters
    return a + b; // function body
}
console.log(addNumbers(5, 10)); // 15

function multiplyNumbers(a, b) { // function declaration with parameters
    return a * b; // function body
}
console.log(multiplyNumbers(5, 10)); // 50

// EVEN NUMBERS CHECKER FUNCTION
function isEven(num) { // function declaration with parameter
    return num % 2 === 0 // function body, it will return true if the number is even, otherwise false
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false

// ODD NUMBERS CHECKER FUNCTION
function isOdd(num) { // function declaration with parameter
    return num % 2 !== 0 // function body, it will return true if the number is odd, otherwise false
}
console.log(isOdd(4)); // false
console.log(isOdd(5)); // true

// EMAIL CHECKER FUNCTION

function emailChecker(email) {
    if (email.includes('@gmail.com') || email.includes('@')) {
        return true;
    } else {
        return false;
    }
}
console.log(emailChecker("saikumardhara4696@gmail.com")) // true
console.log(emailChecker("saikumardhara4696@gmail")) // false

// FUNCTION EXPRESSION
const greetingsExpression = function (name) {
    return "Hello, " + name + "!";
};
console.log(greetingsExpression("sai")); // Hello, sai!



// ARRAYS

// Arrays are used to store multiple values in a single variable.
// They can hold values of different data types, including numbers, strings, objects, and even other arrays.
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
console.log(fruits[3]); // grape
console.log(fruits[4]); // mango
fruits[5] = 'kiwi'; // adding a new element to the array at index 5
console.log(fruits[5]); // kiwi

// FOR LOOP WITH ARRAY
for (let i = 0; i <= fruits.length; i++) {
    console.log("for loop with array", fruits[i])
}
// apple
// banana
// orange
// grape
// mango

// FOR  OF LOOP WITH ARRAY
for (let fruit of fruits) {
    console.log("Forof loop", fruit)  // simple way to use for loop to return a array
}
// apple
// banana
// orange
// grape
// mango

// FOR LOOP TO REVERSE ARRAY
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log("Reverse array", fruits[i])// reversing the Array using for loop
}
// mango
// grape
// orange
// banana
// apple



// ARRAY METHODS

// push() - adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('strawberry'); // adding a new element to the end of the array
console.log("push method", fruits); // ['apple', 'banana', 'orange', 'grape', 'mango', 'kiwi', 'strawberry']

// pop() - removes the last element from an array and returns that element.
fruits.pop(); // removing the last element from the array
console.log("pop method", fruits); // ['apple', 'banana', 'orange', 'grape', 'mango', 'kiwi']

// shift() - removes the first element from an array and returns that element.
fruits.shift(); // removing the first element from the array
console.log('shift method', fruits); // ['banana', 'orange', 'grape', 'mango', 'kiwi']

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('watermelon'); // adding a new element to the beginning of the array
console.log('unshift method', fruits); // ['watermelon', 'banana', 'orange', 'grape', 'mango', 'kiwi']

// indexOf() - returns the first index at which a given element can be found in the array,
//  or -1 if it is not present.
console.log('indexOf method', fruits.indexOf('orange')); // 2
console.log('indexOf method', fruits.indexOf('pineapple')); // -1

// includes() - determines whether an array includes a certain value among its entries,
//  returning true or false as appropriate.
console.log('includes method', fruits.includes('orange')); // true
console.log('includes method', fruits.includes('pineapple')); // false

// length - returns the number of elements in an array.
console.log('length method', fruits.length); // 6

// reverse() - reverses the order of the elements in an array.
fruits.reverse(); // reversing the order of the elements in the array
console.log('reverse method', fruits); // ['kiwi', 'mango', 'grape', 'orange', 'banana', 'watermelon']

// sort() - sorts the elements of an array in place and returns the sorted array.
fruits.sort(); // sorting the elements of the array in ascending order
console.log('sort method', fruits); // ['banana', 'grape', 'kiwi', 'mango', 'orange', 'watermelon']

// join() - joins all elements of an array into a string.
console.log('join method', fruits.join(', ')); // banana, grape, kiwi, mango, orange, watermelon

// slice() - returns a shallow copy of a portion of an array into a new array
//  object selected from start to end (end not included).
fruits.slice(1, 4); // returns a new array with elements from index 1 to 3
console.log('slice method', fruits.slice(1, 4)); // ['grape', 'kiwi', 'mango']

// splice() - changes the contents of an array by removing or replacing 
// existing elements and/or adding new elements in place.
fruits.splice(1, 2); // removes 2 elements starting from index 1
console.log('splice method', fruits); // ['banana', 'mango', 'orange', 'watermelon']

// concat() - is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.
const vegetables = ['carrot', 'broccoli', 'spinach'];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log('concat method', fruitsAndVegetables); // ['banana', 'mango', 'orange', 'watermelon', 'carrot', 'broccoli', 'spinach']

// forEach() - executes a provided function once for each array element.
fruits.forEach(function (fruit) {
    console.log('forEach method', fruit); // prints each fruit in the array
});

// map() - creates a new array populated with the results of calling a
//  provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (number) {
    return number * number; // returns the square of each number
});
console.log('map method', squaredNumbers); // [1, 4, 9, 16, 25]

// filter() - creates a new array with all elements that pass 
// the test implemented by the provided function.
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0; // returns true for even numbers
});
console.log('filter method', evenNumbers); // [2, 4]

// sort() - arranging the array in ascending to descending order
fruits.sort()
// [ 'apple', 'banana', 'grape', 'mango', 'orange' ]
fruits.sort().reverse()
// ['orange', 'mango', 'grape', 'banana', 'apple']

// SORT THE TWO ARRAYS IN ASCENDING ORDER

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];


var mergeTwoLists = function (list1, list2) {

    let result = [];
    let index = 0;
    for (let i = 0; i < list1.length; i++) {
        result[index] = list1[i]
        index++
    }
    for (let i = 0; i < list2.length; i++) {
        result[index] = list2[i]
        index++
    }
    for (let j = 0; j < result.length; j++) {
        for (let k = 0; k < result.length; k++) {
            if (result[k] > result[k + 1]) {
                let temp = result[k];
                result[k] = result[k + 1];
                result[k + 1] = temp
            }
        }
    }
    return result;
};
console.log("leet code problem", mergeTwoLists(list1, list2))

// LEET CODE ACCEPTED CODE

// var mergeTwoLists = function (list1, list2) {
//     let dummy = new ListNode(0);  // List Node we need to learn // generate by chatgpt
//     let current = dummy;

//     while (list1 !== null && list2 !== null) {
//         if (list1.val <= list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     if (list1 !== null) {
//         current.next = list1;
//     } else {
//         current.next = list2;
//     }

//     return dummy.next;
// };



// SPREAD OPERATOR
// The spread operator expands elements of an iterable (like an array) into individual places.
// Unpacks/expands elements
const spreadoperator = [1, 2, 3, 4, 5]
let maximumNum = Math.max(...spreadoperator)
console.log('maximumNum', maximumNum) // 5
let minimumNum = Math.min(spreadoperator)
console.log("minimumNum", minimumNum) // 1

// REST OPERATOR
// while the rest operator collects multiple individual elements into a single array.
// Packs/collects elements
// Both operators use the exact same three-dot syntax (...), but they perform opposite tasks depending on how and where you use them.
//  ...rest allow a function work with a variable number of arguments by building them into an array


let userName = "Sai Code";
let restletters = [...userName].join("-")
console.log('restoperator', restletters) // S-a-i- -C-o-d-e

// if we use (...) in function it is spread operator
function openFridge(...foods) { // if we use (...) in function parameters it is "rest operator".
    console.log("spread the array", ...foods) // return strings
}

function getFoods(...foods) {
    return foods
}
const food1 = 'apple';
const food2 = 'banana';
const food3 = 'orange';
const food4 = 'grapes'

const foods = getFoods(food1, food2, food3, food4);
console.log("rest operator", foods) // return Array of strings

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number
    }
    return result;
}
console.log("sum fun", sum(10, 20, 30, 40)) // 100

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length
}

const total = getAverage(75, 40, 100, 85)
console.log('getAverage', total)



// SHALLOW COPY
// A shallow copy only copies the top-level properties; nested objects still share the same reference.
let fru = ['apple', 'banana', 'pear']
let newfru = [...fru];
console.log('shallow copy', newfru) // shallow copy [ 'apple', 'banana', 'pear' ]

// DEEP COPY
// A deep copy copies everything recursively, creating a completely independent duplicate with no shared references.

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// =========Deep Copy========
// Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
// New Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
// ---------After modification---------
// Employee=>  { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
// New Employee=>  { eid: 'E102', ename: 'Beck', eaddress: 'New York', salary: 70000 }


// CALLBACKS FUNCTION
// Callback is a function that is passed as an argument to another function.
// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

hello(goodBye); // callback function passing

function hello(callback) {
    console.log("Hello !")
    callback();
}
// Hello !
// goodByee !
function goodBye() {
    console.log("good Byee!")
}


callbackSum(displayConsole, 1, 2)
function callbackSum(callback, x, y) {
    let result = x + y;
    callback(result)
}
function displayConsole(result) {
    console.log("callback rs", result)
}


// FOR EACH  
// => forEach method is used to iterate over the elements of an array and apply a specified function callback to each element
// element, index, array are provided. 
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(display);

function display(element) {
    console.log(element)
}

















































































































































