let n = +prompt("Nhập 1 số nguyên dương n bất kỳ");
let a = 0;
let b;
while (n > 0) {
  b = n % 10;
  a = a * 10 + b;
  n = Math.floor(n / 10);
}
console.log(a);
