// 1. Data mahasiswa (minimal 6)
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dina", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 95 },
];

// 2. Function hitung statistik (pakai reduce)
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, mhs, index) => {
      acc.total += 1;
      acc.totalNilai += mhs.nilai;
      acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
      acc.terendah = Math.min(acc.terendah, mhs.nilai);

      if (index === arrMahasiswa.length - 1) {
        acc.rataRata = acc.totalNilai / acc.total;
      }

      return acc;
    },
    {
      total: 0,
      totalNilai: 0,
      rataRata: 0,
      tertinggi: -Infinity,
      terendah: Infinity,
    },
  );

  return {
    total: hasil.total,
    rataRata: hasil.rataRata,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah,
  };
}

// 3. Filter lulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

// 4. Tambah grade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;

    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// 5. Menjalankan semua function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 75);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// 6. Output rapi
console.log("=== STATISTIK MAHASISWA ===");
console.log(`Total: ${statistik.total}`);
console.log(`Rata-rata: ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi: ${statistik.tertinggi}`);
console.log(`Nilai Terendah: ${statistik.terendah}`);

console.log("\n=== MAHASISWA LULUS ===");
mahasiswaLulus.forEach((mhs, i) => {
  console.log(`${i + 1}. ${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== DATA DENGAN GRADE ===");
mahasiswaDenganGrade.forEach((mhs, i) => {
  console.log(`${i + 1}. ${mhs.nama} - ${mhs.nilai} (Grade ${mhs.grade})`);
});
