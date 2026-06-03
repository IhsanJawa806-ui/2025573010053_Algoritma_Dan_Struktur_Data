// =====================================
// CLASS NODE
// =====================================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// =====================================
// MEMBUAT LINKED LIST DARI ARRAY
// =====================================
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

// =====================================
// PRINT LINKED LIST
// =====================================
function printLinkedList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }

  result += "null";

  console.log(result);
}

// =====================================
// 1. PALINDROM LINKED LIST
// Mengecek apakah linked list palindrom
// Big O: O(n)
// =====================================
function palindromLL(head) {
  let current = head;
  const arr = [];

  // Masukkan semua data ke array
  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  // Cek palindrom
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// =====================================
// 2. HAPUS NODE KE-N DARI AKHIR
// Menggunakan two-pointer
// Big O: O(n)
// =====================================
function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Geser fast n+1 langkah
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Geser keduanya sampai fast null
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Hapus node
  slow.next = slow.next.next;

  return dummy.next;
}

// =====================================
// 3. TENGAH LINKED LIST
// Menggunakan fast & slow pointer
// Jika genap → ambil tengah kedua
// Big O: O(n)
// =====================================
function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// =====================================
// PENGUJIAN PALINDROM
// =====================================

console.log("=== UJI PALINDROM LINKED LIST ===");

// Kasus 1
let list1 = createLinkedList([1, 2, 3, 2, 1]);
printLinkedList(list1);
console.log("Palindrom:", palindromLL(list1));

// Kasus 2
let list2 = createLinkedList([1, 2, 2, 1]);
printLinkedList(list2);
console.log("Palindrom:", palindromLL(list2));

// Kasus 3
let list3 = createLinkedList([1, 2, 3, 4]);
printLinkedList(list3);
console.log("Palindrom:", palindromLL(list3));

// =====================================
// PENGUJIAN HAPUS N DARI AKHIR
// =====================================

console.log("\n=== UJI HAPUS N DARI AKHIR ===");

// Kasus 1
let list4 = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(list4);

list4 = hapusNDariAkhir(list4, 2);

console.log("Setelah hapus:");
printLinkedList(list4);

// Kasus 2
let list5 = createLinkedList([10, 20, 30, 40]);
printLinkedList(list5);

list5 = hapusNDariAkhir(list5, 1);

console.log("Setelah hapus:");
printLinkedList(list5);

// Kasus 3
let list6 = createLinkedList([7, 8, 9]);
printLinkedList(list6);

list6 = hapusNDariAkhir(list6, 3);

console.log("Setelah hapus:");
printLinkedList(list6);

// =====================================
// PENGUJIAN TENGAH LINKED LIST
// =====================================

console.log("\n=== UJI TENGAH LINKED LIST ===");

// Kasus 1
let list7 = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(list7);

console.log("Node Tengah:", tengahLinkedList(list7).data);

// Kasus 2
let list8 = createLinkedList([10, 20, 30, 40, 50, 60]);
printLinkedList(list8);

console.log("Node Tengah:", tengahLinkedList(list8).data);

// Kasus 3
let list9 = createLinkedList([100, 200, 300]);
printLinkedList(list9);

console.log("Node Tengah:", tengahLinkedList(list9).data);
