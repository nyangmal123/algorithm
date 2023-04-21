let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

// 한 줄씩 입력받기
for (let i = 1; i <= n; i++){
    let [r, s] = input[i].split(' ');
    let result='';
    // s를 하나씩 확인하며 r번 반복한 문자열 붙이기
    for(let j=0; j<s.length; j++){
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}