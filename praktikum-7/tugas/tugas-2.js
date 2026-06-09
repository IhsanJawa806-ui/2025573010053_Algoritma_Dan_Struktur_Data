class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  // O(1)
  push(value) {
    this.stack.push(value);

    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }

  // O(1)
  pop() {
    if (this.stack.length === 0) {
      return null;
    }

    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return removed;
  }

  // O(1)
  top() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  // O(1)
  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }

    return this.minStack[this.minStack.length - 1];
  }

  // O(1)
  isEmpty() {
    return this.stack.length === 0;
  }

  tampilkan() {
    console.log("Stack:", this.stack);
  }
}

// ======================
// Pengujian
// ======================

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

ms.tampilkan();
console.log("getMin() =", ms.getMin()); // 2

ms.pop(); // hapus 2
console.log("Setelah pop()");
console.log("getMin() =", ms.getMin()); // 3

ms.pop(); // hapus 7
console.log("Setelah pop()");
console.log("getMin() =", ms.getMin()); // 3
