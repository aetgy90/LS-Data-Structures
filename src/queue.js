class Queue {
  constructor() {
    this.holder = [];
  }

  enqueue(someArgs) {
    return this.holder.push(someArgs);
  }

  dequeue() {
    return this.holder.shift();
  }

  get size() {
    return this.holder.length;
  }
}

module.exports = Queue;
