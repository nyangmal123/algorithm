let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0;
let idx = 0;
for (let i=0; i<9; i++){
    let data = Number(input[i])
    if(max<data){
        max=data;
        idx=i;
    }
}
console.log(max);
console.log(idx+1);