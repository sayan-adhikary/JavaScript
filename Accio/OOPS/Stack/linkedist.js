class Node {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    #head;
    #tail;
    size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.size = 0;
    }

    append(x) {
        // O(1)
        let newNode = new Node(x);
        this.size++;
        if (this.#head == null) {
            this.#head = newNode;
            this.#tail = newNode;
            return;
        }
        this.#tail.next = newNode;
        this.#tail = newNode;
    }

    prepend(x) {
        // O(1)
        let newNode = new Node(x);
        this.size++;
        if (this.#head == null) {
            this.#head = newNode;
            this.#tail = newNode;
            return;
        }
        newNode.next = this.#head;
        this.#head = newNode;
    }

    popend() {
        // O(n)
        if (this.size == 0) {
            console.log("List is empty");
            return;
        }
        if (this.size == 1) {
            this.#head = this.#tail = null;
            this.size = 0;
            return;
        }
        let temp = this.#head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = null;
        this.size--;
    }

    popfront() {
        // O(1)
        if (this.size == 0) {
            console.log("List is empty");
            return;
        }
        if (this.size == 1) {
            this.#head = this.#tail = null;
            this.size = 0;
            return;
        }

        let temp = this.#head;
        this.#head = this.#head.next;
        temp.next = null;
        this.size--;
    }

    print() {
        let temp = this.#head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let node = new Node(4);
console.log(node);

let list = new LinkedList();
console.log(list);

list.append(4);
list.append(8);
list.append(3);
list.prepend(9);

list.print();
console.log(list);