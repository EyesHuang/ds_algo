// add a method prepend() to the linked list that adds a node to the beginning of the list

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
        newNode.next = aft
        pre.next = newNode
        this.length++;
        return this.printList();
    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.prepend(1));

console.log(myLinkedList.insert(0, 30));
console.log(myLinkedList.insert(2, 40));