class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //view the top item
    peek() {
        return this.top;
    }

    //add a new item
    push(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            let current = this.top;
            for (let i = 0; i < this.length - 1; i++) {
                current = current.next;
            }
            current.next = node;
            this.bottom = node;
        }
        this.length++;
    }

    //remove the last item
    pop() {
        let current = this.top;
        for (let i = 0; i < this.length - 2; i++) {
            current = current.next;
        }
        current.next = null;
        this.bottom = current;
        this.length--;
    }
    //isEmpty
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("google");
console.log(JSON.stringify(myStack));
console.log(JSON.stringify(myStack.peek()));
myStack.pop();
console.log(JSON.stringify(myStack));
