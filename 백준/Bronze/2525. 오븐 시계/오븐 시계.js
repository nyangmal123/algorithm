let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let total = 60 * a + b + c;
total %=1440;
let hour = parseInt(total / 60);
let minute = total % 60;

console.log(hour + " "+ minute);