class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        } else if (index >= this.length) {
            this.append(value);
            return this.printList();
        }

        let pre = this.head;
        for (let i = 0; i < index; i++) {
            pre = pre.next
        }
        const newNode = {
            value: value,
            next: null
        }
        let aft = pre.next
        pre.next = newNode
        newNode.next = aft
        this.length++;
        return this.printList();
    }
    remove(index) {
        let leadingNode;

        if (index <= 0) {
            this.head = this.head.next;
        } else if (index >= this.length - 1) {
            leadingNode = this.getLeadingNode(this.length - 1);
            leadingNode.next = null;
        } else {
            leadingNode = this.getLeadingNode(index);
            let removedNode = leadingNode.next;
            leadingNode.next = removedNode.next
        }

        this.length--;
        return this.printList();
    }

    getLeadingNode(index) {
        let node = this.head;
        for (let i = 0; i < index - 1; i++) {
            node = node.next;
        }
        return node;
    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.prepend(1));

console.log(myLinkedList.insert(0, 30));
console.log(myLinkedList.insert(2, 40));
console.log(myLinkedList.insert(10, 6));

console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(5));
console.log(myLinkedList.remove(-2));