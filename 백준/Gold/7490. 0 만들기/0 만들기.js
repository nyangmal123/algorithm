let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let n = 0;
let arr = [];

function dfs(result, depth) {
    if (depth == n - 1) {
        let str = ''; // 현재 수식이 어떤지 받을 문자열
        for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
        str += arr[n - 1] + '';
        current = eval(str.split(' ').join('')); // 공백을 제거한 뒤 수식 계산
        if (current == 0) console.log(str); 
        return;
    }
    for (let x of [' ', '+','-']) {
        result.push(x);
        dfs(result, depth + 1); // 재귀함수 호출
        result.pop();
    }
}

for (let tc = 1; tc <= testCase; tc++) {
    n = Number(input[tc]);
    arr = []; // arr 초기화
    for (let i = 1; i <= n; i++) arr.push(i); // 빈 배열에 1부터 N까지의 수 삽입
    dfs([], 0);
    console.log();
}