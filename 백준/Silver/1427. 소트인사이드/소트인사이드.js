let input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
//하나씩 확인해야돼서 숫자형으로 변환하면 안됨
let n = input[0];
// 0부터 9까지 숫자들의 출현 빈도를 담은 배열 선언
let cnt = Array(10).fill(0); // 초기 출현 빈도는 0

for(let x of n){
    // n이 44321이라면 cnt[4]=2, cnt[3]=1, cnt[2]=1, cnt[1]=1
    cnt[Number(x)]++;
}

let answer = '';
// 9부터(큰 수 부터) 확인하여 내림차순 출력
// i=4 일 때 j=0,j=1 동안 answer에 4 입력됨. 총 2번
for(let i=9; i>=0; i--){
    for(let j=0; j<cnt[i]; j++) answer += i + '';
}
console.log(answer);