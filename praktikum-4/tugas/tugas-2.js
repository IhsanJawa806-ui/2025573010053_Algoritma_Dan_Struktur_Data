// Implementasi Stack (boleh dari file lain / tulis ulang)
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// Function cek kurung seimbang
function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let char of ekspresi) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false; // tidak seimbang
      }
      stack.pop();
    }
  }

  // jika stack kosong → seimbang
  return stack.isEmpty();
}

// Pengujian (minimal 5)
const testCases = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))",
  "(a + b) * (c + d)",
];

// Tampilkan hasil
testCases.forEach((exp) => {
  console.log(`'${exp}' → Seimbang: ${cekKurungSeimbang(exp)}`);
});
