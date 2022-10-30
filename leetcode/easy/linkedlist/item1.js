// Initialize linked list
let node1 = new ListNode(4);
let node2 = new ListNode(5);
let node3 = new ListNode(1);
let node4 = new ListNode(9);

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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// Execute function
deleteNode(node3);
console.log(JSON.stringify(node1));
