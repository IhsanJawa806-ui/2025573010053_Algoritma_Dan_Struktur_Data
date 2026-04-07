// 02-tipe-data.js
// ================================================
// MENGENAL TIPE DATA JAVASCRIPT
// ================================================
// --- 1. STRING (teks) ---
let namaMahasiswa = "Muhammad Ihsan";
let programStudi = "Teknik Informatika";
// Template literal: gunakan backtick (`) untuk menggabungkan teks & variabel
let perkenalan = `Halo! Nama saya ${namaMahasiswa} dari ${programStudi}.`;
console.log(perkenalan);
console.log("Panjang nama:", namaMahasiswa.length); // property .length
// --- 2. NUMBER (angka) ---
let nilaiUjian = 87; // bilangan bulat
let ipk = 3.75; // bilangan desimal
let suhuKulkas = -4; // bilangan negatif
console.log("Nilai Ujian :", nilaiUjian);
console.log("IPK :", ipk);
console.log("Suhu Kulkas:", suhuKulkas);
// --- 3. BOOLEAN (true / false) ---
let sudahLogin = true;
let sudahLulus = false;
console.log("Sudah login :", sudahLogin);
console.log("Sudah lulus :", sudahLulus);
// --- 4. NULL (nilai kosong yang disengaja) ---
let fotoProfil = null; // belum ada foto
console.log("Foto profil:", fotoProfil);
// --- 5. UNDEFINED (belum diberi nilai) ---
let nomorTelepon;
console.log("No. Telepon:", nomorTelepon);
// --- Mengecek tipe data dengan typeof ---
console.log("--- Tipe Data ---");
console.log("namaMahasiswa :", typeof namaMahasiswa); // string
console.log("nilaiUjian :", typeof nilaiUjian); // number
console.log("sudahLogin :", typeof sudahLogin); // boolean
console.log("fotoProfil :", typeof fotoProfil); // object <- keanehan JS!
console.log("nomorTelepon :", typeof nomorTelepon); // undefined

// Latihan 3

// ===============================================
// Bagian A — Segitiga Bintang (versi alternatif)
// ===============================================

let bintang = "";

for (let i = 1; i <= 5; i++) {
  bintang += "*"; // tambah 1 bintang setiap loop
  console.log(bintang);
}

// =================================================
// Bagian B — Bilangan Prima 1–50 (versi alternatif)
// =================================================

for (let angka = 2; angka <= 50; angka++) {
  let pembagi = 0;

  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      pembagi++; // hitung berapa kali habis dibagi
    }
  }

  // bilangan prima punya tepat 2 pembagi (1 dan dirinya sendiri)
  if (pembagi === 2) {
    console.log(angka);
  }
}
