
// DSA QUESTIONS SOLVED

// 1. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function (x) {

    let str = x.toString();

    let revs = []
    for (let i = 0; i < str.length; i++) {
        revs.unshift(str[i])
    }
    let ne = revs.join('');
    let result;
    if (ne == str) {
        result = true
    } else {
        result = false
    }
    return result
};
isPalindrome(121);

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//     Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//     Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

// 2. Reverse String
// Write a function that reverses a string.The input string is given as an array of characters s.

// You must do this by modifying the input array in -place with O(1) extra memory.

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++
        right--
    }
    console.log(s)
};

// Example 1:

// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Example 2:

// Input: s = ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]





// 3.Largest Number

// Given a list of non - negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.





// Day 2 

// DSA practice: 
// Second-largest number;
// remove duplicates from sorted array.

































