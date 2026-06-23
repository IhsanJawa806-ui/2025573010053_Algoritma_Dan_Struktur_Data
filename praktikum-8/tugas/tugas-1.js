class HashMapLinearProbing {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(capacity).fill(null);

    // Tombstone marker
    this.DELETED = { deleted: true };
  }

  // Fungsi hash sederhana
  hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.capacity;
  }

  // Menghitung load factor
  loadFactor() {
    return this.size / this.capacity;
  }

  // Resize tabel jika load factor > 0.7
  resize() {
    console.log("Resize dilakukan...");

    let oldTable = this.table;

    this.capacity *= 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;

    for (let item of oldTable) {
      if (item !== null && item !== this.DELETED) {
        this.put(item.key, item.value);
      }
    }
  }

  // Insert atau Update
  put(key, value) {
    if (this.loadFactor() > 0.7) {
      this.resize();
    }

    let index = this.hash(key);

    while (
      this.table[index] !== null &&
      this.table[index] !== this.DELETED &&
      this.table[index].key !== key
    ) {
      index = (index + 1) % this.capacity;
    }

    if (this.table[index] === null || this.table[index] === this.DELETED) {
      this.size++;
    }

    this.table[index] = {
      key,
      value,
    };
  }

  // Mencari data
  get(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        return this.table[index].value;
      }

      index = (index + 1) % this.capacity;

      if (index === start) {
        break;
      }
    }

    return null;
  }

  // Delete menggunakan tombstone
  remove(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        this.table[index] = this.DELETED;
        this.size--;
        return true;
      }

      index = (index + 1) % this.capacity;

      if (index === start) {
        break;
      }
    }

    return false;
  }

  // Menampilkan isi tabel
  display() {
    console.log("Isi Hash Table:");

    for (let i = 0; i < this.capacity; i++) {
      if (this.table[i] === null) {
        console.log(i, "=> Empty");
      } else if (this.table[i] === this.DELETED) {
        console.log(i, "=> DELETED");
      } else {
        console.log(i, "=>", this.table[i].key, ":", this.table[i].value);
      }
    }
  }
}

// ======================
// Pengujian
// ======================

const map = new HashMapLinearProbing();

map.put("Ali", 90);
map.put("Budi", 85);
map.put("Cici", 95);
map.put("Dodi", 88);
map.put("Eka", 76);
map.put("Fani", 80);
map.put("Gilang", 91);

map.display();

console.log("\nNilai Budi =", map.get("Budi"));
console.log("Nilai Cici =", map.get("Cici"));

console.log("\nMenghapus Budi...");
map.remove("Budi");

map.display();

console.log("\nCari Budi =", map.get("Budi"));

console.log("\nMenambah data baru...");
map.put("Hana", 89);
map.put("Indra", 92);

map.display();
