let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let string = input[1];

let result = 0;

for (let x of string){
    result += Number(x);
}

console.log(result);