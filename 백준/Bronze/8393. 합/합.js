let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');

let n = Number(input[0]);
let result = 0;
for(i=1; i<=n; i++){
    result += i;
}

console.log(result);