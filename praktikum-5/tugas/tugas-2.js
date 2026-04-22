// ======================================
// FUNGSI-FUNGSI KOMPLEKSITAS
// ======================================

// O(1)
// Big O Time: O(1)
// Alasan: hanya 1 operasi
function fn_O1(n) {
  return n + 1;
}

// O(n)
// Big O Time: O(n)
// Alasan: loop sebanyak n
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n)
// Big O Time: O(n log n)
// Alasan: loop luar n, loop dalam log n
function fn_OnLogn(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }

  return count;
}

// O(n^2)
// Big O Time: O(n^2)
// Alasan: nested loop n × n
function fn_On2(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }

  return count;
}

// ======================================
// FUNGSI UKUR WAKTU
// ======================================

function ukurWaktu(fn, n) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  return end - start;
}

// ======================================
// BENCHMARK SEMUA
// ======================================

function benchmarkSemua(ukuranData) {
  for (let n of ukuranData) {
    console.log(`\n=== Ukuran n = ${n} ===`);

    console.log("O(1):", ukurWaktu(fn_O1, n), "ms");
    console.log("O(n):", ukurWaktu(fn_On, n), "ms");
    console.log("O(n log n):", ukurWaktu(fn_OnLogn, n), "ms");
    console.log("O(n^2):", ukurWaktu(fn_On2, n), "ms");
  }
}

// ======================================
// JALANKAN BENCHMARK
// ======================================

benchmarkSemua([100, 500, 1000, 5000, 10000]);

// ======================================
// OBSERVASI (KOMENTAR HASIL)
// ======================================

/*
Hasil yang diamati:

1. O(1)
   - Waktu eksekusi hampir selalu 0 ms
   - Tidak berubah walaupun n bertambah besar
   - Sesuai teori: konstan

2. O(n)
   - Waktu bertambah secara linear
   - Jika n naik 10x, waktu kira-kira ikut naik
   - Sesuai teori linear

3. O(n log n)
   - Lebih lambat dari O(n), tapi jauh lebih cepat dari O(n^2)
   - Pertumbuhan terlihat sedang (tidak terlalu tajam)
   - Sesuai teori

4. O(n^2)
   - Waktu meningkat sangat drastis
   - Saat n besar (5000 atau 10000), waktu bisa sangat lama
   - Bisa terasa lag atau berat
   - Sesuai teori kuadratik

Kesimpulan:
- Hasil benchmark konsisten dengan teori Big O
- Semakin tinggi kompleksitas, semakin cepat waktu eksekusi meningkat
- O(n^2) sangat tidak efisien untuk data besar
*/
