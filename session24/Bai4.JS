let sum = 0;
let a;
do {
  a = +prompt("Nhập 1 số nguyên dương bất kỳ");
  for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
      sum += i;
      if (sum < a) {
        console.log(`${i}^2 = ${Math.pow(i, 2)}`);
      }
    }
  }
} while (a < 0);
