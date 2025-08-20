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
    let cur = this.head;
  }
  at(value) {

  }
  pop() {

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

  toString() {
  
}
}

const list = new linkedList();
list.append("caine");
list.append("pisica");
console.log(list);
