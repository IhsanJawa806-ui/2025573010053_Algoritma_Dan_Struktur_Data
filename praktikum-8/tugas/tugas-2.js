// 1. Menggunakan Prefix Sum + HashTable

function subArrayJumlahK(arr, k) {
  const map = new Map();

  map.set(0, 1);

  let prefixSum = 0;
  let jumlah = 0;

  for (const num of arr) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      jumlah += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return jumlah;
}

// 2. Solusi Naif

function karakterPertamaUnik(s) {
  const map = new Map();

  for (const ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// 3. Menggunakan Map
function topKFrequent(arr, k) {
  const freq = new Map();

  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);
}

// TESTING

console.log("=== TUGAS 2 HASH TABLE ===");
console.log("Soal 1:", subArrayJumlahK([1, 1, 1], 2));
console.log("Soal 2:", karakterPertamaUnik("leetcode"));
console.log("Soal 3:", topKFrequent([1, 1, 1, 2, 2, 3], 2));
