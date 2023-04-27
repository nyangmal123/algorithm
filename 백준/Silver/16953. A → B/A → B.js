let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let flag = false;
let result = 1;

while (a <= b){
    if(a === b){
        flag = true;
        break;
    }
    if(b % 2 === 0) b = parseInt(b / 2);
    else if (b % 10 === 1) b = parseInt(b / 10);
    else break;
    result++;
}
if(flag) console.log(result);
else console.log(-1);
