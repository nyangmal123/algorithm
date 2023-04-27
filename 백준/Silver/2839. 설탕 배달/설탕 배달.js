let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;
let flag = false;

// 더 이상 할 수 없을 때까지 반복
while(n>=0){
    if(n===0 || n % 5===0){
        cnt += parseInt(n / 5);
        console.log(cnt);
        flag = true;
        break;
    }
    n -= 3;
    cnt += 1;
}
if (!flag) {
    console.log(-1);
}