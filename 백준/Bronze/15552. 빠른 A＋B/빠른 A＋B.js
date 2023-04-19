let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let result = '';

for (let i = 1; i<=T; i++) {
    let data = input[i].split(' ');
    let a = Number(data[0]);
    let b = Number(data[1]);
    result += a+b+'\n';
}

console.log(result);