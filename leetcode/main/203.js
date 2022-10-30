// Initialize linked list
let node1 = new ListNode(7);
let node2 = new ListNode(7);
let node3 = new ListNode(7);
let node4 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(JSON.stringify(node1));

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // dummy node is in front of the linked list
    let dummy = new ListNode(0);
    dummy.next = head;
    let preNode = dummy;

    while (head) {
        if (head.val === val) {
            preNode.next = head.next;
            head = head.next;
        } else {
            preNode = head;
            head = head.next;
        }
    }
    return dummy.next;
};

// Execute function
let resNode = removeElements(node1, 7);
console.log(JSON.stringify(resNode));
