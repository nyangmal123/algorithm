let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]); // 지방의 수
let m = Number(input[2]); // 총 예산
let arr = input[1].split(' ').map(Number); // 각 지방의 예산 요청

// m이 10억 이하로 매우 크다 - 이진 탐색
// 적절한 상한 금액은 남은 예산이 0에 근사하도록 만드는 값
let start = 1; // 1이상은 주게 되어있음
let end = arr.reduce((a,b)=>Math.max(a,b)); // 각 지방에서 요청한 예산의 최댓값
let result = 0; // 결과적으로 내야 할 상한 값

while(start <= end) {
    let mid = parseInt((start + end) / 2); // 중간지점을 상한액으로 잡아본다
    let total = 0; // 배정된 예산의 총액 계산
    
    for(x of arr){
        total += Math.min(mid, x); // 각 지방의 예산이 상한액을 넘지 않도록 하며 총액 계산
    }
    if(total <= m) { // 총액이 총 예산을 넘기지 않았으면 상한액 증가시키기
        result = mid;
        start = mid + 1;
    } else { // 아니면 감소
        end = mid - 1;
    }
}
console.log(result);