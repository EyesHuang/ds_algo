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
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let holdingPoint = this.top;
            this.top = newNode;
            this.top.next = holdingPoint;
        }
        this.length++;

        return this;
    }

    //remove the last item
    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("google");
console.log(JSON.stringify(myStack));

console.log(JSON.stringify(myStack.peek()));

console.log(JSON.stringify(myStack.pop()));
console.log(JSON.stringify(myStack.pop()));
console.log(JSON.stringify(myStack.pop()));
console.log(JSON.stringify(myStack.pop()));