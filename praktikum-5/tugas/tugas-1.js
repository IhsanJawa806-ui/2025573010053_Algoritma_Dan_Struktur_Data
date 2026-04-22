// ==============================
// FUNGSI A - INTERSECTION ARRAY
// ==============================

// Versi lambat
// Big O Time: O(n^2)
// Alasan: setiap elemen arr1 dicek ke arr2 (nested loop)
// Big O Space: O(1)
function intersectionLambat(arr1, arr2) {
  const hasil = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !hasil.includes(arr1[i])) {
        hasil.push(arr1[i]);
      }
    }
  }

  return hasil;
}

// Versi cepat (pakai Set)
// Big O Time: O(n)
// Alasan: akses Set O(1), hanya 1 loop utama
// Big O Space: O(n)
function intersectionCepat(arr1, arr2) {
  const set2 = new Set(arr2);
  const hasil = [];

  for (let num of arr1) {
    if (set2.has(num) && !hasil.includes(num)) {
      hasil.push(num);
    }
  }

  return hasil;
}

// ==============================
// FUNGSI B - KELOMPOK ANAGRAM
// ==============================

// Big O Time: O(n * k log k)
// Alasan: n = jumlah kata, k = panjang kata (sorting tiap kata)
// Big O Space: O(n)
function kelompokAnagram(arr) {
  const map = {};

  for (let kata of arr) {
    const key = kata.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(kata);
  }

  return Object.values(map);
}

// ==============================
// FUNGSI C - TRIPLE (a + b = c^2)
// ==============================

// Versi lambat
// Big O Time: O(n^3)
// Alasan: 3 nested loop
// Big O Space: O(1)
function tripleLambat(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[i] + arr[j] === arr[k] * arr[k]) {
          return true;
        }
      }
    }
  }

  return false;
}

// Versi lebih cepat (sorting + two pointer)
// Big O Time: O(n log n)
// Alasan: sorting + pencarian linear (two pointer)
// Big O Space: O(1)
function tripleCepat(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;

  for (let k = 0; k < n; k++) {
    const target = arr[k] * arr[k];

    let i = 0;
    let j = n - 1;

    while (i < j) {
      const sum = arr[i] + arr[j];

      if (sum === target) return true;
      else if (sum < target) i++;
      else j--;
    }
  }

  return false;
}

// ==============================
// FUNGSI UKUR WAKTU
// ==============================

function ukurWaktu(fn, ...args) {
  const start = Date.now();
  fn(...args);
  const end = Date.now();
  return end - start;
}

// ==============================
// PENGUJIAN
// ==============================

// ---- Fungsi A ----
console.log("=== Fungsi A (Intersection) ===");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log("Lambat:", intersectionLambat(arr1, arr2));
console.log("Cepat:", intersectionCepat(arr1, arr2));

// ---- Fungsi B ----
console.log("\n=== Fungsi B (Anagram) ===");

const kata = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(kelompokAnagram(kata));

// ---- Fungsi C ----
console.log("\n=== Fungsi C (Triple) ===");

const arrC = [1, 2, 3, 5];
console.log("Lambat:", tripleLambat(arrC));
console.log("Cepat:", tripleCepat(arrC));

// ==============================
// UJI PERFORMA DATA BESAR
// ==============================

console.log("\n=== UJI PERFORMA ===");

// data besar
const size = 5000; // jangan terlalu besar untuk O(n^3)
const dataBesar = Array.from({ length: size }, () =>
  Math.floor(Math.random() * 1000),
);

// Fungsi A
console.log("\n-- Intersection --");
console.log(
  "Lambat:",
  ukurWaktu(intersectionLambat, dataBesar, dataBesar),
  "ms",
);
console.log("Cepat:", ukurWaktu(intersectionCepat, dataBesar, dataBesar), "ms");

// Fungsi B
console.log("\n-- Anagram --");
const words = Array.from({ length: 5000 }, () => "abc");
console.log("Waktu:", ukurWaktu(kelompokAnagram, words), "ms");

// Fungsi C
console.log("\n-- Triple --");

// WARNING: yang lambat bisa sangat lama!
console.log("Cepat:", ukurWaktu(tripleCepat, [...dataBesar]), "ms");

// Uncomment kalau mau coba (hati-hati lemot)
// console.log("Lambat:", ukurWaktu(tripleLambat, dataBesar), "ms");
