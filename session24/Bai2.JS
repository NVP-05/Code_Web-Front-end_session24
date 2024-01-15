let a = +prompt("Nhập 1 số nguyên a bất kì");
let b = +prompt("Nhập 1 số nguyên b bất kì");
let sum = 0;
if(a < b){
    console.log("Các số nguyên trong khoảng a và b là:\n");
    for(let i = a+1; i < b; i++){
        console.log(i);
        sum = sum + i;
    }
    console.log("Tổng của các số nguyên là:" + " " + sum);
}else{
    console.log("Các số nguyên trong khoảng b và a là:\n");
    for(let i = b+1; i < a; i++){
        console.log(i);
        sum = sum + i;
    }
    console.log("Tổng của các số nguyên là:" + " " + sum);
}