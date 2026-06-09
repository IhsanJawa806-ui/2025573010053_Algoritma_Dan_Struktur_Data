class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // "darurat" atau "biasa"
    this.waktuDaftar = waktuDaftar;
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = [];
    this.antrianBiasa = [];
  }

  // Menambahkan pasien ke antrian sesuai prioritas
  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.push(pasien);
    } else {
      this.antrianBiasa.push(pasien);
    }
  }

  // Melayani pasien
  layani() {
    let pasienDilayani = null;

    if (this.antrianDarurat.length > 0) {
      pasienDilayani = this.antrianDarurat.shift();
    } else if (this.antrianBiasa.length > 0) {
      pasienDilayani = this.antrianBiasa.shift();
    }

    if (pasienDilayani) {
      console.log("=== Pasien Dilayani ===");
      console.log(`ID            : ${pasienDilayani.id}`);
      console.log(`Nama          : ${pasienDilayani.nama}`);
      console.log(`Prioritas     : ${pasienDilayani.prioritas}`);
      console.log(`Waktu Daftar  : ${pasienDilayani.waktuDaftar}`);
      console.log("--------------------------");
    } else {
      console.log("Tidak ada pasien dalam antrian.");
    }
  }

  // Menampilkan seluruh antrian
  tampilkanAntrian() {
    console.log("\n=== ANTRIAN DARURAT ===");
    if (this.antrianDarurat.length === 0) {
      console.log("Kosong");
    } else {
      this.antrianDarurat.forEach((p, index) => {
        console.log(`${index + 1}. ${p.nama} (${p.prioritas})`);
      });
    }

    console.log("\n=== ANTRIAN BIASA ===");
    if (this.antrianBiasa.length === 0) {
      console.log("Kosong");
    } else {
      this.antrianBiasa.forEach((p, index) => {
        console.log(`${index + 1}. ${p.nama} (${p.prioritas})`);
      });
    }
  }

  // Mengecek apakah semua antrian kosong
  semuaKosong() {
    return this.antrianDarurat.length === 0 && this.antrianBiasa.length === 0;
  }
}

// ======================
// Simulasi 10 Pasien
// ======================

const rs = new AntrianRS();

const namaPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dina",
  "Eko",
  "Fajar",
  "Gita",
  "Hani",
  "Indra",
  "Joko",
];

for (let i = 0; i < 10; i++) {
  const prioritas = Math.random() < 0.5 ? "darurat" : "biasa";

  const pasien = new Pasien(
    i + 1,
    namaPasien[i],
    prioritas,
    `08:${String(i * 5).padStart(2, "0")}`,
  );

  rs.daftar(pasien);
}

// Menampilkan antrian awal
console.log("=== ANTRIAN AWAL ===");
rs.tampilkanAntrian();

// Melayani semua pasien
console.log("\n=== PROSES PELAYANAN ===");
while (!rs.semuaKosong()) {
  rs.layani();
}

console.log("Semua pasien telah dilayani.");
