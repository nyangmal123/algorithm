let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let sum = 0;

function check(data){
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length -1; i++){
        if(data[i] !== data[i+1]){
            if(setData.has(data[i+1])){
                return false;
            } else {
            setData.add(data[i+1]);
            }
        }
    }
    return true;
}

for (let i =1; i<=n; i++){
    let data = input[i];
    if(check(data))sum+=1;
}
console.log(sum);