let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++){
    arr.push(input[i]);
}

// 중복된 단어 없애는 것 부터 
arr = [...new Set(arr)];

arr.sort((a,b) => {
    // 길이가 짧은 것 부터 출력
    if (a.length != b.length) return a.length - b.length;
    // 길이가 같으면 사전 순으로
    else {
        if(a<b) return -1;
        else if (a>b) return 1;
        else return 0;
    }
})

for(let word of arr){
    console.log(word);
}