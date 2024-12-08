class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;

    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }

      return null;
    }
  }

  searchFromIndex(value) {}

  searchFromValue(value) {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.head.value === value) {
      return 0;
    }

    let curr = this.head;
    let index = 0;

    while (curr.next) {
      if (curr.value == value) {
        return index;
      }
      curr = curr.next;

      index++;
    }

    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("List size: ", list.getSize());

list.append(10);
list.append(20);
list.append(30);
list.print();

list.insert(14, 2);
list.print();

// list.removeValue(30);
// list.print();

console.log(list.searchFromValue(10));
