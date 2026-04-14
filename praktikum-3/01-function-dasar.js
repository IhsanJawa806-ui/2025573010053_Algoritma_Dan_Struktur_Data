// 01-function-dasar.js
// ================================================
// FUNCTION: DEKLARASI, PARAMETER, RETURN, SCOPE
// ================================================

// --- 1. Function tanpa parameter dan tanpa return ---
// Cara lama (function declaration)
function kuadratBiasa(x) {
  return x * x;
}

// cara baru (arrow function - ekuivalen)
const kuadrat = (x) => {
  return x * x;
};

// Arrow functio ringkas (implicit return)
const kuadratRingkas = (x) => x * x;

console.log("=== Perbandingan Penulisan ===");
console.log("Biasa   :", kuadratBiasa(5)); //25
console.log("Arrow   :", kuadrat(5)); //25
console.log("Ringkas   :", kuadratRingkas(5)); //25

// --- 2. Arrow function dengan beberapa parameter ---
const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => "selamat ${waktu}, ${nama}!";

console.log("Luas 4x6 :", luas(4, 6));
console.log(salam("Budi", "pagi"));

//  --- 3. Callback: function sebagai argumen ---
function lakukanOperasi(angka, operasiCallback) {
  console.log("Angka awal: ${angka}");
  const hasil = operasiCallback(angka);
  console.log("Hasil setelah operasi: ${hasil}");
}

console.log("\n=== Callback ==="); //kirim function sebagai argumen
lakukanOperasi(7, kuadratRingkas); //kirim arrow function langsung
lakukanOperasi(10, (x) => x + 100); //kirim function biasa langsung
lakukanOperasi(20, function (x) {
  return x / 2;
});

// --- 4. setTimeout sebagai contoh callback nyata ---
console.log("\n=== setTimeout (Callback)===");
console.log("pesan 1: Sebelum timer");

setTimeout(() => {
  console.log("pesan 3: Ini dari dalam setTimeout (setelah 1 detik)");
}, 1000); //1000 milidetik = 1 detik

console.log("pesan 2: Setelah mendaftarkan timer");

// Latihan 1

// Function penjumlahan
function tambah(a, b) {
  return a + b;
}

// Function pengurangan
function kurang(a, b) {
  return a - b;
}

// Function perkalian
function kali(a, b) {
  return a * b;
}

// Function pembagian
function bagi(a, b) {
  if (b === 0) {
    console.log("Error: tidak bisa membagi dengan nol");
    return null;
  }
  return a / b;
}

// Function kalkulator utama
function kalkulator(a, operator, b) {
  switch (operator) {
    case "+":
      return tambah(a, b);
    case "-":
      return kurang(a, b);
    case "*":
      return kali(a, b);
    case "/":
      return bagi(a, b);
    default:
      console.log("Operator tidak dikenali");
      return null;
  }
}

// Pengujian (minimal 5)
console.log(kalkulator(10, "+", 5)); // 15
console.log(kalkulator(10, "-", 5)); // 5
console.log(kalkulator(10, "*", 5)); // 50
console.log(kalkulator(10, "/", 5)); // 2
console.log(kalkulator(10, "/", 0)); // Error + null
