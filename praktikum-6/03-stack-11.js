// File: 03-stack-11.js

// ======================
// CLASS NODE
// ======================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ======================
// CLASS LINKED LIST
// ======================
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Tambah data di depan (O(1))
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // Hapus head (O(1))
  removeHead() {
    if (this.head === null) {
      return null;
    }

    const removedData = this.head.data;
    this.head = this.head.next;

    this.length--;

    return removedData;
  }

  // Ambil data head
  getHead() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }
}

// ======================
// CLASS STACK
// Menggunakan LinkedList
// (Komposisi)
// ======================
class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // Push ke stack
  push(data) {
    this.list.prepend(data);
  }

  // Pop dari stack
  pop() {
    return this.list.removeHead();
  }

  // Lihat elemen paling atas
  peek() {
    return this.list.getHead();
  }

  // Cek kosong
  isEmpty() {
    return this.list.isEmpty();
  }

  // Jumlah data
  size() {
    return this.list.size();
  }

  // Print isi stack
  print() {
    this.list.print();
  }
}

// ======================
// DEMONSTRASI STACK
// ======================

console.log("=== DEMO STACK ===");

const stack = new Stack();

stack.push("Halaman Home");
stack.push("Buka Profil");
stack.push("Edit Profil");
stack.push("Upload Foto");

console.log("\nIsi Stack:");
stack.print();

console.log("\nPeek:", stack.peek());
console.log("Size:", stack.size());
console.log("Is Empty:", stack.isEmpty());

// ======================
// SIMULASI UNDO / REDO
// ======================

console.log("\n=== SIMULASI UNDO ===");

// Array aksi pengguna
const actions = [
  "Mengetik Huruf A",
  "Mengetik Huruf B",
  "Menghapus Huruf B",
  "Menambahkan Gambar",
  "Mengubah Warna Background",
];

const undoStack = new Stack();

// Push semua aksi ke stack
for (let action of actions) {
  console.log("Push:", action);
  undoStack.push(action);
}

console.log("\nIsi Stack Setelah Push:");
undoStack.print();

// Undo beberapa kali
console.log("\nUndo 1:", undoStack.pop());
console.log("Undo 2:", undoStack.pop());
console.log("Undo 3:", undoStack.pop());

console.log("\nIsi Stack Setelah Undo:");
undoStack.print();

console.log("\nAksi Teratas Sekarang:", undoStack.peek());
console.log("Jumlah Aksi Tersisa:", undoStack.size());
