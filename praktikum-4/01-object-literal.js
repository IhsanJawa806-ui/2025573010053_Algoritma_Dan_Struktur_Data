// 01-object-literal.js
// =============================================
// OBJECT LITERAL : PROPERTY, METHOD, DAN THIS
// =============================================

// --- 1. Membuat object literal ---
const mahasiswa = {
  nama: "Budi Santoso",
  umur: 20,
  Jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};

// --- 2. Mengakses property ---
console.log("=== Akses Property ===");
console.log("Nama    :", mahasiswa.nama);
console.log("Jurusan :", mahasiswa["jurusan"]);

// Bracket notation berguna jika key disimpan di variabel
const keyYangDicari = "ipk";
console.log("IPK    :", mahasiswa[keyYangDicari]);

// --- 3. Menanmbah dan merubah property ---
mahasiswa.email = "budi@email.com";
mahasiswa.umur = 21;

console.log("\nSetelah diubah:", mahasiswa);

// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);

// --- 5. Menambahkan method ke object ---
const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10, //tahun

  //method function didalam object
  perkenalan() {
    //'this' merujuk ke object dosen itu sendiri
    return "Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.";
  },

  statusSenior() {
    if (this.pengalaman >= 10) {
      return "${this.nama} adalah dosen senior.";
    }
  },
};

console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Iterasi key-value dengan for...in ---
console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    console.log("  ${key}: ${dosen[key]}");
  }
}

// Object.keys(),Object,value(),Object.entries()
console.log("keys    :", Object.keys(mahasiswa));
console.log("values  :", Object.values(mahasiswa));

// Latihan 1 Object Buku dan perpustakaan
const buku = {
  judul: "Pemrograman JavaScript",
  pengarang: "Andi Setiawan",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  // Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // Method diskon(persen)
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

// Menampilkan info buku
console.log(buku.info());

// Menghitung harga setelah diskon
console.log("Harga setelah diskon 10%: Rp" + buku.diskon(10));

// Membuat array koleksiBuku (minimal 3 buku)
const koleksiBuku = [
  {
    judul: "Belajar HTML",
    pengarang: "Budi Santoso",
    tahunTerbit: 2020,
    harga: 75000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },

  {
    judul: "Belajar CSS",
    pengarang: "Siti Aminah",
    tahunTerbit: 2021,
    harga: 85000,
    tersedia: false,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },

  {
    judul: "Belajar JavaScript",
    pengarang: "Rudi Hartono",
    tahunTerbit: 2023,
    harga: 95000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
];

// Menampilkan info semua buku menggunakan forEach
console.log("=== Semua Buku ===");
koleksiBuku.forEach(function (buku) {
  console.log(buku.info());
});

// Menggunakan filter untuk mendapatkan buku yang tersedia
const bukuTersedia = koleksiBuku.filter(function (buku) {
  return buku.tersedia === true;
});

console.log("=== Buku yang Tersedia ===");
bukuTersedia.forEach(function (buku) {
  console.log(buku.info());
});
