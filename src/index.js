class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(head, size) {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  size() {
    console.log(` The list has ${this.size} nodes`);
  }

  head() {
    console.log(`${this.head}`);
  }

  tail() {
    if (!this.head) return null;
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    console.log(current.value);
  }

  at(value) {}

  pop() {
    let current = this.head;
    let previous;
   
    if (this.size === 0) return;
    else {
      while (current.next != null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    this.size--; 
  }

  contains(value) {}

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {}
}

const list = new linkedList();
list.append("dog");
list.append("cat");
list.append("kitty");

console.log(list);
