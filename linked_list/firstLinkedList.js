// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

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
        if (this.length === 1) {
            this.tail = {
                value: value,
                next: null
            }
            this.head.next = this.tail
        } else {
            this.tempTail = this.tail
            this.tail = {
                value: value,
                next: null
            }
            this.tempTail.next = this.tail
        }

        this.length = this.length + 1;

        return this;
    }
}

let myLinkedList = new LinkedList(10);
console.log(JSON.stringify(myLinkedList));
myLinkedList.append(5);
console.log(JSON.stringify(myLinkedList));
myLinkedList.append(16);
console.log(JSON.stringify(myLinkedList));
myLinkedList.append(99);
console.log(JSON.stringify(myLinkedList));
myLinkedList.append(28);
console.log(JSON.stringify(myLinkedList));