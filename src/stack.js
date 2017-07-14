class Stack {
  constructor() {
    this.holder = [];
  }
  get size() {
    return this.holder.length;
  }
  add(n) {
    return this.holder.push(n);
  }
  remove() {
    return this.holder.pop();
  }
}

module.exports = Stack;

// #### Stacks

//  * Should have the methods: `add`, `remove`, and a getter for the property `size`
//  * `add` should accept a value and place it on top of the stack.
//  * `remove` should remove and return the top value off of the stack.
//  * `size` should return how many items are on the stack.
