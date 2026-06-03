// 01-linked-list.js

// ── Class Node: unit terkecil linked list ──
class Node {
  constructor(data) {
    this.data = data; // nilai yang disimpan
    this.next = null; // pointer ke node berikutnya
  }
}
// ── Class LinkedList ────────────────────────
class LinkedList {
  constructor() {
    this.head = null; // pointer ke node pertama
    this.size = 0; // jumlah node
  }
  // Tambah node di AKHIR — O(n)
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next; // traverse ke akhir
      current.next = newNode;
    }
    this.size++;
  }
  // Tambah node di AWAL — O(1)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // node baru menunjuk ke head lama
    this.head = newNode; // head sekarang adalah node baru
    this.size++;
  }
  // Insert di posisi indeks tertentu — O(n)
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(" Index di luar batas!");
      return;
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
  // Hapus node berdasarkan nilai — O(n)
  delete(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next; // lewati node yang dihapus
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Cari node berdasarkan nilai — O(n)
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  // Tampilkan semua node — O(n)
  print() {
    if (!this.head) {
      console.log(" [List kosong]");
      return;
    }
    let result = "";
    let current = this.head;
    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
      current = current.next;
    }
    console.log(" ", result, ` (size: ${this.size})`);
  }
  // Balik urutan list — O(n)
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next; // simpan next sementara
      current.next = prev; // balik pointer
      prev = current; // geser prev maju
      current = next; // geser current maju
    }
    this.head = prev; // head sekarang adalah node terakhir
  }
  // Konversi ke Array (untuk inspeksi) — O(n)
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  // Tambah data di awal
  // Big O: O(1)
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // Tambah data di akhir
  // Big O: O(n)
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;

    this.length++;
  }

  // Hapus head
  // Big O: O(1)
  removeHead() {
    if (!this.head) {
      return null;
    }

    const removedData = this.head.data;
    this.head = this.head.next;

    this.length--;

    return removedData;
  }

  // Ambil data berdasarkan index
  // Big O: O(n)
  getAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  // Hapus node berdasarkan index
  // Big O: O(n)
  deleteAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    // Jika head
    if (index === 0) {
      return this.removeHead();
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;

    this.length--;

    return current.data;
  }

  // Cari index data
  // Big O: O(n)
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Cek list kosong
  // Big O: O(1)
  isEmpty() {
    return this.length === 0;
  }

  // Hapus semua node
  // Big O: O(1)
  clear() {
    this.head = null;
    this.length = 0;
  }

  // Ambil ukuran list
  size() {
    return this.length;
  }

  // Print isi list
  print() {
    if (!this.head) {
      console.log("List kosong");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }
}

// ==========================
// DEMONSTRASI
// ==========================

const list = new LinkedList();

list.append("A");
list.append("B");
list.append("C");
list.append("D");

console.log("Isi LinkedList:");
list.print();

console.log("\ngetAt(2):", list.getAt(2));

console.log("\nindexOf('C'):", list.indexOf("C"));
console.log("indexOf('Z'):", list.indexOf("Z"));

console.log("\nDelete index 1:");
list.deleteAt(1);
list.print();

console.log("\nApakah kosong?", list.isEmpty());

console.log("\nClear semua data...");
list.clear();

list.print();

console.log("Apakah kosong sekarang?", list.isEmpty());

// ── Demonstrasi ────────────────────────────────
const ll = new LinkedList();
console.log("=== Append ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();
console.log("\n=== Prepend ===");
ll.prepend(5);
ll.print();
console.log("\n=== Insert di indeks 2 ===");
ll.insertAt(15, 2);
ll.print();
console.log("\n=== Search ===");
console.log(" Indeks nilai 20:", ll.search(20));
console.log(" Indeks nilai 99:", ll.search(99));
console.log("\n=== Delete 20 ===");
ll.delete(20);
ll.print();
console.log("\n=== Reverse ===");
ll.reverse();
ll.print();
