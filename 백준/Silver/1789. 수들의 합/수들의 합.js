let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let s = Number(input[0]);
// n이 최대여야 하므로 가능한 작은 수 부터 더하는 것이 좋다
// 1부터 시작하고 마지막 수만 조작하면 됨

let sum = 0;
let cur = 0;
while(sum <= s){
    cur += 1;
    sum += cur;
}
console.log(cur -1); // sum값이 s이상일 때에도 실행되므로 -1