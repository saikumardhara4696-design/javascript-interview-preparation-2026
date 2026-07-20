

// LEET CODE PATTERNS

// 1. PREFIX SUM PATTERN:-

// when we need to use :
// Query sum of elements in a SUBARRAY

// A => 1   2    3    4     5     6
// When you want to find the sum of two elements in  the array like 3 and 5.

// so single Query 
function findSubarraySum(array, i, j) {
    let subarraySum = 0;

    for (let k = i; k <= j; k++) {
        subarraySum += array[k];
    }

    return subarraySum;
}
const arr = [1, 2, 3, 4, 5];

console.log(findSubarraySum(arr, 1, 3)); // 2 + 3 + 4 = 9
console.log(findSubarraySum(arr, 0, 4)); // 1 + 2 + 3 + 4 + 5 = 15

// Time Complexity:
// O(j - i + 1)(or O(n) in the worst case)

// Space Complexity:
// O(1)(constant extra space)
// This is called the brute - force approach for a single range query because it iterates
// through every element in the requested subarray each time the function is called.


// Multiple Queries:
//  O(n*m)
//  m - number of queries
//  n - length of the array


// To make it faster sum array use Prefix Sum Array
// P => 1   3    6    10    15    21   28

// where value at index i is the sum of all elements from start up to index i in the given array.
// P[i] = A[O] + A[1] + ... A[i]
// SUM[i,j] = P[j] - P[i-1]


// 2. TWO POINTERS

//  1   2   3    4    5    6
//      |         |  
//     LEFT       RIGHT


//  Here we need initialize two variables and move towards each other 
//  or move away from each other. based on the problem.

// example:
//   [a, b, c, d, c, b, a]
//  Here we need to check the Palindrome or not

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}
console.log(isPalindrome("abcdcba")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("abc"));     // false

// Reduce the time complexity from O(n^2) to O(n)


// 3. SLIDING WINDOW

//  1   2   3  4  5  6
//  |   |   |

//  1   2   3   4   5   6
//      |   |   |

// CHECK THE THREE VALUES AT A TIME (SLIDING WINDOW)

function maxSubarraySumSlidingWindow(arr, k) {
    const n = arr.length;

    // Calculate the sum of the first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;
    let maxStartIndex = 0;

    // Slide the window
    for (let i = 0; i < n - k; i++) {
        windowSum = windowSum - arr[i] + arr[i + k];

        if (windowSum > maxSum) {
            maxSum = windowSum;
            maxStartIndex = i + 1;
        }
    }

    return {
        subarray: arr.slice(maxStartIndex, maxStartIndex + k),
        maxSum: maxSum
    };
}

const arr = [3, 2, 7, 5, 9, 6, 2];
const k = 3;

const result = maxSubarraySumSlidingWindow(arr, k);

console.log(result.subarray); // [5, 9, 6]
console.log(result.maxSum);   // 20

// Note: The image says the answer is[5, 9, 6], but that's not the maximum sum.

// [7, 5, 9] = 21 ✅ (Maximum)
// [5, 9, 6] = 20

// So the correct maximum - sum subarray is:

// [7, 5, 9]
// with a maximum sum of 21.


// DRY RUN:-

// Array = [3, 2, 7, 5, 9, 6, 2]
// K = 3

// Window 1
// [3, 2, 7]
// Sum = 12
// Max = 12

// Slide Window

// Remove 3, Add 5
// [2, 7, 5]
// Sum = 14
// Max = 14

// Remove 2, Add 9
// [7, 5, 9]
// Sum = 21
// Max = 21

// Remove 7, Add 6
// [5, 9, 6]
// Sum = 20
// Max = 21

// Remove 5, Add 2
// [9, 6, 2]
// Sum = 17
// Max = 21

// Answer:
// Subarray = [7, 5, 9]
// Maximum Sum = 21


// Time Complexity:

// Initial window calculation: O(k)
// Sliding the window: O(n - k)

// Overall:

// O(n)

// Space Complexity

// O(1)(excluding the returned subarray)

// Pattern Used

// This is the Sliding Window(Fixed Size) pattern.

// It is commonly used for:

//     Maximum / Minimum sum of size k
// Average of subarrays
// Count of substrings
// Fixed - size window problems on arrays and strings

// This is one of the most important patterns for LeetCode and coding interviews.