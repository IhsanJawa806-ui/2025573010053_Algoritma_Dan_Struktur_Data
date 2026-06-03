// =====================================
// CLASS NODE
// =====================================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// =====================================
// CLASS DOUBLY LINKED LIST
// =====================================
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // pointer ke node terakhir
    this.length = 0;
  }

  // =====================================
  // APPEND
  // Menambah node di akhir list
  // Big O: O(1)
  // Karena langsung menggunakan pointer tail
  // =====================================
  append(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Hubungkan node baru dengan tail lama
      newNode.prev = this.tail;
      this.tail.next = newNode;

      // Geser tail ke node baru
      this.tail = newNode;
    }

    this.length++;
  }

  // =====================================
  // PREPEND
  // Menambah node di awal list
  // Big O: O(1)
  // =====================================
  prepend(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;

      this.head = newNode;
    }

    this.length++;
  }

  // =====================================
  // INSERT AT
  // Menambah node pada index tertentu
  // Big O: O(n)
  // Karena perlu traversal
  // =====================================
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      console.log("Index tidak valid");
      return;
    }

    // Jika di awal
    if (index === 0) {
      this.prepend(data);
      return;
    }

    // Jika di akhir
    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    const previousNode = current.prev;

    previousNode.next = newNode;
    newNode.prev = previousNode;

    newNode.next = current;
    current.prev = newNode;

    this.length++;
  }

  // =====================================
  // DELETE
  // Menghapus node berdasarkan data
  // Big O: O(n)
  // Karena perlu pencarian node
  // =====================================
  delete(data) {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current) {
      // Jika data ditemukan
      if (current.data === data) {
        // Jika node head
        if (current === this.head) {
          this.head = current.next;

          if (this.head) {
            this.head.prev = null;
          }
        }

        // Jika node tail
        if (current === this.tail) {
          this.tail = current.prev;

          if (this.tail) {
            this.tail.next = null;
          }
        }

        // Jika node tengah
        if (current.prev) {
          current.prev.next = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        }

        this.length--;

        return current.data;
      }

      current = current.next;
    }

    return null;
  }

  // =====================================
  // REVERSE
  // Membalik linked list
  // Big O: O(n)
  // Karena semua node ditukar
  // =====================================
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      // Tukar next dan prev
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    // Tukar head dan tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // =====================================
  // PRINT FORWARD
  // Print dari depan ke belakang
  // Big O: O(n)
  // =====================================
  printForward() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }

  // =====================================
  // PRINT BACKWARD
  // Print dari belakang ke depan
  // Menggunakan pointer tail
  // Big O: O(n)
  // =====================================
  printBackward() {
    let current = this.tail;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }

    result += "null";

    console.log(result);
  }

  // =====================================
  // SIZE
  // Big O: O(1)
  // =====================================
  size() {
    return this.length;
  }
}

// =====================================
// DEMONSTRASI
// =====================================

const dll = new DoublyLinkedList();

console.log("=== APPEND ===");

dll.append("A");
dll.append("B");
dll.append("C");

dll.printForward();

console.log("\n=== PREPEND ===");

dll.prepend("X");
dll.prepend("Y");

dll.printForward();

console.log("\n=== INSERT AT ===");

dll.insertAt(2, "MIDDLE");

dll.printForward();

console.log("\n=== PRINT BACKWARD ===");

dll.printBackward();

console.log("\n=== DELETE ===");

dll.delete("B");

dll.printForward();

console.log("\n=== REVERSE ===");

dll.reverse();

dll.printForward();

console.log("\n=== SIZE ===");

console.log("Jumlah Node:", dll.size());
