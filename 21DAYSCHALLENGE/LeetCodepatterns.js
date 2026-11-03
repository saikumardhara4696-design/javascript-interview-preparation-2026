



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


