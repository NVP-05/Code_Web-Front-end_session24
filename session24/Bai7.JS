let n = +prompt("Nhập vào một số bất kỳ");
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    console.log("Đây không phải số nguyên tố.");
    break;
  } else {
    console.log("Đây là số nguyên tố.");
  }
}
