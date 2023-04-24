let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = [];
for(let i=1; i<=n; i++){
    let [x,y] = input[i].split(' ').map(Number);
    data.push([x,y]);
}
function check(a,b){
    if(a[1] != b[1]) return a[1]-b[1];
    else return a[0]-b[0];
}
data.sort(check);

let answer = '';
for(let z of data){
    answer += z[0] + ' ' + z[1] + '\n';
}
console.log(answer);