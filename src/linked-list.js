class Node {
  constructor(newValue) {
    this.value = newValue;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(newValue) {
    const newNode = new Node(newValue);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeHead() {
    return this.head;
  }
  contains(item) {
    const checkValue = (someValue) => {
      if (!someValue) return false;
      if (someValue.value === item) return true;
      return checkValue(someValue.next);
    };
    return checkValue(this.head);
  }
  }

module.exports = LinkedList;

// #### Linked Lists

//  * Should have the methods: `addToTail`, `removeHead`, and `contains`.
//  * `addToTail` replaces the tail with a new value that is passed in.
//  * `removeHead` removes and returns the head node.
//  * `contains` should searth through the linked list and return true if a matching value is found.
//  * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.
//    These are the only two properties that you need to keep track of an infinite number of nodes.
//    Build your nodes with objects.

// ends in null
// starts with header
// to add / reference change -> ^ <-
// to remove just skip
// consists of 2 properties current element and next
