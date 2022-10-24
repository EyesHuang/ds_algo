class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: this.tail
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode
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
    reverse() {
        const array = [];
        let currentNode = this.tail;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.prev;
        }
        return array;
    }
    insert(index, value) {
        if (index <= 0) {
            this.prepend(value);
            return this.printList();
        } else if (index >= this.length) {
            this.append(value);
            return this.printList();
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index);
        const follower = leader.next;

        newNode.prev = leader;
        follower.previous = newNode
        leader.next = newNode
        newNode.next = follower

        this.length++;
        return this.printList();
    }
    remove(index) {
        let leadingNode;

        if (index <= 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (index >= this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            leadingNode = this.traverseToIndex(index - 1);
            let removedNode = leadingNode.next;
            let holdingNode = removedNode.next;
            holdingNode.previous = leadingNode;
            leadingNode.next = holdingNode;
        }

        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }
}

let myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.reverse());
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.prepend(1));

console.log(myLinkedList.insert(0, 30));
console.log(myLinkedList.insert(2, 40));
console.log(myLinkedList.insert(10, 6));

console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(5));
console.log(myLinkedList.remove(-2));

console.log(myLinkedList.reverse());