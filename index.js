
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






























































































































































































