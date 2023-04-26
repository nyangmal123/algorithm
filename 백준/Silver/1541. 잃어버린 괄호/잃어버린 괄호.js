let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// (-) 연산자 기준으로 나눈다
let groups = input[0].split('-');
let answer = 0;

for(let i = 0; i < groups.length; i++){
    // 한 그룹 내 (+) 은 연산해버리기
    let cur = groups[i].split('+').map(Number).reduce((a,b)=>a+b);
    if (i === 0) answer += cur; // 첫 번째 그룹은 항상 덧셈
    else answer -= cur; // 두 번째 그룹부턴 뺄셈
}
console.log(answer);