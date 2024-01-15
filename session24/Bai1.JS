do{
    let a = +prompt("Nhập 1 số nguyên dương bất kỳ:");
    if(a <= 0){
        console.log("Vui lòng nhập 1 số nguyên dương.");
        break;
    }else{
        for(let i = 2; i < a; i++){
            if(i%2 == 0){
                console.log(i*i);
            }
        }
        break;
    }
} while(1 == 1);