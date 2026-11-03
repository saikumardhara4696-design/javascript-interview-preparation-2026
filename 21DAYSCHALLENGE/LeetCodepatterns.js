



// The 14 Essential LeetCode Patterns:-
// ====================================

// 1. Two Pointers (Opposite ends or converging scans)
// 2. Fast & Slow Pointers (Tortoise & Hare / Cycle detection)
// 3. Sliding Window (Subarrays, contiguous subsegments)
// 4. Merge Intervals (Overlapping ranges, scheduling)
// 5. Cyclic Sort (Numbers in a given range $[1, n]$ or $[0, n]$)
// 6. In-place Reversal of a LinkedList (Pointer rewiring)
// 7. Tree Breadth-First Search (BFS) (Level-by-level traversal)
// 8. Tree Depth-First Search (DFS) (Pathfinding, recursive tree structures)
// 9. Two Heaps (Dynamic medians, priority tracking)
// 10. Subsets & Backtracking (Combinations, permutations)
// 11. Modified Binary Search (Sorted/rotated collections in $O(\log n)$)
// 12. Top 'K' Elements (K largest, smallest, or frequent items)
// 13. Dynamic Programming (Overlapping subproblems & memoization)
// 14. Graph BFS / DFS & Topological Sort (Dependencies, networks)




// Deep Dive: Each Pattern with Code (JavaScript / TypeScript standard)
// 1. Two Pointers
// Concept: Use two indices iterating across a collection (usually sorted), typically starting from the ends and moving inward.

// When to use: Sorted arrays, finding pairs, palindrome verification, partition problems.

// JavaScript


// Example: Two Sum II (Sorted Array)
// Return 1-based indices of the two numbers such that they add up to target.
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            left++; // Need a larger value
        } else {
            right--; // Need a smaller value
        }
    }

    return [];
}





// 2. Fast & Slow Pointers
// Concept: Pointers move through the data structure at different speeds(e.g., fast advances two nodes while slow advances one).

// When to use: Cycle detection in linked lists / arrays, finding the middle of a linked list.

//     JavaScript


// Example: Linked List Cycle Detection
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false;
}



// 3. Sliding Window
// Concept: Maintain a running window $[L, R]$ over a contiguous segment,
//  expanding $R$ to explore and contracting $L$ when a condition is violated.
// When to use: Longest / shortest substring or subarray matching specific constraints.

// JavaScript

// Example: Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    const charMap = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If seen and inside current window, jump left pointer past it
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }

        charMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}



// 4. Merge Intervals
// Concept: Sort intervals by start time, then iteratively compare each interval 
// against the previous to merge overlaps.

// When to use: Time intervals, calendar schedules, range overlaps.

//     JavaScript


// Example: Merge Overlapping Intervals
function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];

        if (curr[0] <= prev[1]) {
            // Overlap detected: extend the end boundary
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }

    return merged;
}



// 5. Cyclic Sort
// Concept: Places numbers where $value = index + 1$(or $value = index$)
//  by swapping the current number into its target position in $O(n)$ time and $O(1)$ space.
// When to use: Unsorted arrays with values bounded in the range $[1, n]$ or $[0, n]$.

// JavaScript

// Example: Find Missing Number in range [0, n]
function missingNumber(nums) {
    let i = 0;
    const n = nums.length;

    while (i < n) {
        const targetIdx = nums[i];
        if (nums[i] < n && nums[i] !== nums[targetIdx]) {
            // Swap into correct position
            [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
        } else {
            i++;
        }
    }

    for (let j = 0; j < n; j++) {
        if (nums[j] !== j) return j;
    }

    return n;
}


// 6. In - place Reversal of a LinkedList
// Concept: Reverse connections between nodes using three tracking pointers
//  (prev, curr, next) without allocating new nodes.

// When to use: Reversing sub - lists, palindromic lists, reordering linked lists.

//     JavaScript


// Example: Reverse a Singly Linked List
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const nextTemp = curr.next; // Stash next node
        curr.next = prev;          // Reverse direction
        prev = curr;               // Advance prev
        curr = nextTemp;           // Advance curr
    }

    return prev;
}




// 7. Tree Breadth - First Search(BFS)
// Concept: Traverse a tree level by level using a FIFO queue.

// When to use: Level-order output, shortest path in unweighted graphs, zig - zag tree traversal.

//         JavaScript


// Example: Binary Tree Level Order Traversal
function levelOrder(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
    }

    return result;
}



// 8. Tree Depth - First Search(DFS)
// Concept: Traverse as deep as possible down each branch before backtracking,
// typically implemented via recursion or an explicit stack.

// When to use: Path sum calculations, validating Binary Search Trees, tree diameter, maximum depth.

//     JavaScript


// Example: Path Sum (check if root-to-leaf path equals targetSum)
function hasPathSum(root, targetSum) {
    if (!root) return false;

    // Reached leaf node
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}



// 9. Two Heaps 
// Concept: Maintain two priority queues(a Max - Heap for the
//  smaller half and a Min - Heap for the larger half) to access the median 
// in $O(1)$ time.When to use: Continuous streams of numeric data where you
//  need the median or split percentiles.

// JavaScript
// Example: MedianFinder conceptual design using Min/Max heaps
class MedianFinder {
    constructor() {
        // Conceptual heaps (maxHeap: lower half, minHeap: upper half)
        this.low = [];  // simulated max-heap
        this.high = []; // simulated min-heap
    }

    addNum(num) {
        // Push to low, balance to high
        this.low.push(num);
        this.low.sort((a, b) => b - a); // Keep sorted descending
        this.high.push(this.low.shift());
        this.high.sort((a, b) => a - b); // Keep sorted ascending

        // Maintain size invariant: low has equal or +1 elements
        if (this.low.length < this.high.length) {
            this.low.push(this.high.shift());
            this.low.sort((a, b) => b - a);
        }
    }

    findMedian() {
        if (this.low.length > this.high.length) {
            return this.low[0];
        }
        return (this.low[0] + this.high[0]) / 2;
    }
}




// 10. Subsets & Backtracking
// Concept: Systematically construct candidate solutions and abandon("backtrack")
//  as soon as a candidate fails the constraints.

// When to use: Permutations, combinations, subsets, N - Queens, Sudoku.

//     JavaScript


// Example: Generate all Subsets (Power Set)
function subsets(nums) {
    const result = [];

    function backtrack(startIndex, currentSubset) {
        result.push([...currentSubset]);

        for (let i = startIndex; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset); // Explore further
            currentSubset.pop();             // Backtrack
        }
    }

    backtrack(0, []);
    return result;
}




// 11. Modified Binary Search
// Concept: Halve the search space in each step using calculated midpoints, 
// adapting the condition to handle shifted boundaries.

// When to use: Searching in rotated sorted arrays, finding peak elements, search in infinite arrays.

//  JavaScript


// Example: Search in Rotated Sorted Array
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}




// 12. Top 'K' Elements
// Concept: Use a Min - Heap of size $K$ to maintain the top $K$ largest
//  items across an iterable in $O(N \log K)$ instead of $O(N \log N)$ sorting.
// When to use: $K$ most frequent items, $K$ - th largest element, nearest points to origin.
// JavaScript

// Example: Kth Largest Element in an Array (Quickselect or Min-Heap logic)
function findKthLargest(nums, k) {
    // Sorting solution for baseline: O(N log N)
    // Optimal heap solution maintains k elements in min-heap: O(N log K)
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}





// 13. Dynamic Programming(1D / 2D)
// Concept: Break the problem into subproblems, solve each subproblem once,
//  and store solutions in a table(memoization or tabulation).

// When to use: Optimization problems(min / max), counting distinct ways, knapsack variations.

// JavaScript


// Example: Coin Change (Minimum coins to make amount)
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}








































