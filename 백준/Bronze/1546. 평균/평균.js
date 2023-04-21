let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let score = input[1].split(' ').map(Number);
let max = score.reduce((a,b)=>Math.max(a,b));
let updated = [];
for (let i = 0; i<N; i++){
    updated.push(score[i] / max*100);
}

console.log(updated.reduce((a,b)=> a + b)/N);