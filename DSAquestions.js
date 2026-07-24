
//  DSA Question to revision
// =========================


// 1.  find the difference between the sums of the two diagonals of a square matrix.
// Here there is a Nested Array. we need to take first array first element and second array second element.
//  reverse the process like 3rd array first element and second array 2nd element .., etc.

//  A => 11 + 5 - 12 = 4
//  B => 10 + 5 + 4 = 19

//  SUM = 19 - 4 = 15 // Answer

const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];



function diagonalDifference(arr) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < arr.length; i++) {
        first += arr[i][i];
        // here we are entering into nested array arr[i]
        // arr[i] = [11, 2, 4] first array
        // arr[i][i] = 11 of [11, 2, 4] first array
        // arr[0][0]

        second += arr[i][arr.length - 1 - i];
        // arr.length = 3 arrays
        // arr.length - 1 - i => 3-1-0 = 2
        // arr[0][arr.length - 1 -i] = 2
        // arr[0][2] => -12

    }
    //  when you dont know which value is nagative and positive use Math.abs()
    //  It automatically minus the value from positive value
    return Math.abs(first - second);
}



//                 dynamic programming
//                 two pointer
//                 slider
//                 graph
//                 recursion
//                 stag
//                 que
//                 grid

//                 Arrays
//                    ↓
//                 HashMap
//                    ↓
//                 Two Pointers
//                    ↓
//                 Sliding Window
//                    ↓
//                 Linked List
//                    ↓
//                 Stack
//                    ↓
//                 Queue
//                    ↓
//                 Binary Search
//                    ↓
//                 Tree
//                    ↓
//                 Graph
//                    ↓
//                 Dynamic Programming
