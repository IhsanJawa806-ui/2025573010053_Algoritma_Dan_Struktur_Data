// 3. Fungsi A
// Big O: O(1)
// Alasan: hanya melakukan 1 operasi (perkalian), tidak tergantung n
function fnA(n) {
  return n * 2;
}

// 4. Fungsi B
// Big O: O(n^2)
// Alasan: terdapat 2 loop bersarang, masing-masing berjalan n kali → n × n
function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j); // dimatikan agar tidak memperlambat
    }
  }
}

// 5. Fungsi C
// Big O: O(log n)
// Alasan: nilai i dikali 2 setiap iterasi → jumlah iterasi logaritmik
function fnC(n) {
  for (let i = 1; i < n; i *= 2) {
    // console.log(i);
  }
}

// 6. Fungsi D
// Big O: O(n^3)
// Alasan: terdapat 3 loop bersarang → n × n × n
function fnD(arr) {
  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        // console.log(x, y, z);
      });
    });
  });
}

// 8. Function untuk menghitung waktu eksekusi
function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(`Waktu eksekusi: ${end - start} ms`);
}

// 7. Menjalankan fungsi dengan n = 1000
const n = 1000;

console.log("=== Fungsi A ===");
hitungKompleksitas(n, fnA);

console.log("=== Fungsi B ===");
hitungKompleksitas(n, fnB);

console.log("=== Fungsi C ===");
hitungKompleksitas(n, fnC);

// Untuk fungsi D menggunakan array
console.log("=== Fungsi D ===");
const arr = Array.from({ length: n }, (_, i) => i);

// Pengukuran khusus karena parameter berbeda
const startD = Date.now();
fnD(arr);
const endD = Date.now();
console.log(`Waktu eksekusi: ${endD - startD} ms`);
