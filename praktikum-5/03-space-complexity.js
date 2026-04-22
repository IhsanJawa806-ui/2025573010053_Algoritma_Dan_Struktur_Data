// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}
// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}
// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}
// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));
// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemenfor (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

// 2. Fungsi mencari pasangan (nested loop)
// Big O Time: O(n^2)
// Alasan: ada 2 loop bersarang
// Big O Space: O(1)
// Alasan: tidak menggunakan struktur data tambahan
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// Fungsi cepat menggunakan Set
// Big O Time: O(n)
// Alasan: hanya 1 loop
// Big O Space: O(n)
// Alasan: menggunakan Set untuk menyimpan data
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const selisih = target - num;
    if (seen.has(selisih)) {
      return [selisih, num];
    }
    seen.add(num);
  }
  return null;
}

// 3. Pengujian sederhana
const data = [2, 7, 11, 15];
const target = 9;

console.log("Hasil Lambat:", cariPasanganLambat(data, target));
console.log("Hasil Cepat:", cariPasanganCepat(data, target));

// 4. Fungsi untuk mengukur waktu
function ukurWaktu(fn, arr, target) {
  const start = Date.now();
  fn(arr, target);
  const end = Date.now();
  return end - start;
}

// Membuat array 50.000 angka acak
const ukuran = 50000;
const arrBesar = Array.from({ length: ukuran }, () =>
  Math.floor(Math.random() * 1000000),
);

// target yang tidak ada (kemungkinan besar)
const targetBesar = -1;

console.log("\n=== Pengujian Performa ===");

const waktuLambat = ukurWaktu(cariPasanganLambat, arrBesar, targetBesar);
console.log("Waktu Lambat:", waktuLambat, "ms");

const waktuCepat = ukurWaktu(cariPasanganCepat, arrBesar, targetBesar);
console.log("Waktu Cepat:", waktuCepat, "ms");
