// Faced Interview Question Company

// Charter Global Hyderabad Company
// Date : 22-07-2026
// First Round [Coding round]
// LEET CODE QUESTION ASSIGNED TO SOLVE IN VIRTUAL CALL   ***Important***

// 1. Solve this Linked list from LEET CODE ? 
// Q:- "19. Remove Nth Node From End of List "
// Answer:-
var removeNthFromEnd = function (head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next

};

removeNthFromEnd([1, 2, 3, 4, 5], 4)
