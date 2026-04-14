// ==========================================
// 1. Function Rekursif Pangkat
// ==========================================
function pangkat(basis, eksponen) {
  // base case
  if (eksponen === 0) {
    return 1;
  }

  // recursive case
  return basis * pangkat(basis, eksponen - 1);
}

// uji coba pangkat
console.log("=== UJI PANGKAT ===");
console.log(pangkat(2, 3)); // 8
console.log(pangkat(5, 2)); // 25
console.log(pangkat(3, 4)); // 81

// ==========================================
// 2. Function Rekursif Balik String
// ==========================================
function balikString(str) {
  // base case
  if (str.length <= 1) {
    return str;
  }

  // recursive case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// uji coba balik string
console.log("\n=== UJI BALIK STRING ===");
console.log(balikString("halo")); // olah
console.log(balikString("ihsan")); // nasih

// ==========================================
// 3. Function Cek Palindrom
// ==========================================
function cekPalindrom(str) {
  let hasilBalik = balikString(str);
  return str === hasilBalik;
}

// uji coba palindrom
console.log("\n=== UJI PALINDROM ===");
console.log("katak:", cekPalindrom("katak")); // true
console.log("civic:", cekPalindrom("civic")); // true
console.log("level:", cekPalindrom("level")); // true
console.log("halo :", cekPalindrom("halo")); // false
