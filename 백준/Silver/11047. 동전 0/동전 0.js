let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

// n개의 돈 단위를 배열로
let arr = [];
for(let i=1; i<=n; i++){
    arr.push(Number(input[i]));
}

// 큰 단위부터 k를 채우는 알고리즘
let cnt = 0;
for(let i = n-1; i >= 0; i--){
    // 동전이 몇 개 필요한지 cnt에 순차적으로 저장
    cnt += parseInt(k / arr[i]); 
    k %= arr[i]; // 남은 금액 재할당
}

console.log(cnt);