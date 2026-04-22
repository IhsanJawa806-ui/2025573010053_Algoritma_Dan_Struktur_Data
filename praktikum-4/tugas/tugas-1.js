// Parent Class
class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(`ID: ${this.id}`);
    console.log(`Nama: ${this.nama}`);
    console.log(`Harga: ${this.harga}`);
    console.log(`Stok: ${this.stok}`);
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (jumlah <= this.stok) {
      this.stok -= jumlah;
      console.log(`${jumlah} ${this.nama} berhasil dijual`);
    } else {
      console.log(`Stok tidak cukup!`);
    }
  }
}

// Child Class ProdukDigital
class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    super.info();
    console.log(`Ukuran File: ${this.ukuranFile} MB`);
    console.log(`Format File: ${this.formatFile}`);
  }

  download() {
    console.log(`Mengunduh ${this.nama}...`);
  }

  // override jual (tidak mengurangi stok)
  jual(jumlah) {
    console.log(`${this.nama} adalah produk digital, tidak mengurangi stok`);
  }
}

// Child Class ProdukFisik
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    super.info();
    console.log(`Berat: ${this.beratGram} gram`);
    console.log(`Dimensi: ${this.dimensi}`);
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}

// Membuat instance
const produk1 = new ProdukDigital(1, "Ebook JS", 50000, 999, 5, "PDF");
const produk2 = new ProdukDigital(2, "Video Course", 150000, 999, 500, "MP4");

const produk3 = new ProdukFisik(3, "Mouse", 75000, 10, 200, "10x5x3 cm");
const produk4 = new ProdukFisik(4, "Keyboard", 150000, 5, 800, "45x15x3 cm");

// Array daftarProduk
const daftarProduk = [produk1, produk2, produk3, produk4];

// (a) Menampilkan semua info produk
console.log("=== Semua Produk ===");
daftarProduk.forEach((produk) => {
  produk.info();
  console.log("------------------");
});

// (b) Produk yang tersedia
console.log("=== Produk Tersedia ===");
const produkTersedia = daftarProduk.filter((produk) => produk.tersedia());
produkTersedia.forEach((produk) => {
  console.log(produk.nama);
});

// (c) Array nama produk
console.log("=== Nama Produk ===");
const namaProduk = daftarProduk.map((produk) => produk.nama);
console.log(namaProduk);
