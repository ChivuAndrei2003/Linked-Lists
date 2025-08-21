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

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    if (!this.head) return null;
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    if (this.size === 0) return null;
    
    if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }
    
    let current = this.head;
    let previous;
    
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    
    previous.next = null;
    this.size--;
    return current.value;
  }

  contains(value) {
    return this.find(value) !== null;
  }

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
    if (!this.head) return "null";
    
    let result = "";
    let current = this.head;
    
    while (current) {
      result += `( ${current.value} )`;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }
    
    result += " -> null";
    return result;
  }
}

const list = new linkedList();
list.append("dog");
list.append("cat");
list.append("kitty");

console.log("=== Testing LinkedList Implementation ===");
console.log("List:", list.toString());
console.log("Size:", list.getSize());
console.log("Head:", list.getHead()?.value);
console.log("Tail:", list.tail()?.value);
console.log("At index 1:", list.at(1)?.value);
console.log("Contains 'cat':", list.contains("cat"));
console.log("Contains 'bird':", list.contains("bird"));
console.log("Find 'kitty':", list.find("kitty"));

console.log("\n=== Testing pop() ===");
console.log("Popped:", list.pop());
console.log("List after pop:", list.toString());

console.log("\n=== Testing prepend ===");
list.prepend("first");
console.log("List after prepend 'first':", list.toString());
