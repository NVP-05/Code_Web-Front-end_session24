let n;
let S = 1;
do {
  n = +prompt("Nhập 1 số nguyên dương bất kỳ");
  if (n < 1) {
    console.log("Vui lòng nhập 1 số nguyên dương.");
    break;
  }
  for (let i = 1; i <= n; i++) {
    S = S + 1 / i ** 3;
  }
  console.log("Kết quả của biểu thức là:" + " " + S.toFixed(5));
  break;
} while (1 == 1);
