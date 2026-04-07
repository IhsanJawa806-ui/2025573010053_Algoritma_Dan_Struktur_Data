// 2. Deklarasi variabel
const beratBadan = 68; // kg
const tinggiBadan = 1.72; // meter

// 3. Rumus BMI
// contentReference[oaicite:0]{index=0}

// Hitung BMI
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// 4. Format 2 angka desimal
let bmiFix = bmi.toFixed(2);

// 5. Kategori BMI
let kategori;

if (bmi < 18.5) {
  kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  kategori = "Normal (Ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
  kategori = "Kelebihan Berat Badan (Overweight)";
} else {
  kategori = "Obesitas (Obese)";
}

// 6. Output hasil
console.log(
  `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmiFix} | Kategori: ${kategori}`,
);
