let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i); // arr = [1, ..., n]
let visited = new Array(n).fill(false); // 각 원소 인덱스별 방문 여부 visited =[false, false, ...]
let selected = []; // 현재 순열에 포함된 원소

let answer = '';
function dfs(arr, depth){
    if(depth === m){ // 모든 순열을 확인, 재귀함수 탈출
        let result = []; // 순열 결과 저장 테이블
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + ' '; // 계산된 순열을 실질적으로 처리하는 부분
        answer += '\n';
        return;
    }
    for (let i = 0; i < arr.length; i++){ // 하나씩 arr 원소 인덱스를 확인하며 
        if (visited[i]) continue; // 중복 허용 안하므로 이미 처리된 원소는 무시
        selected.push(i); // 현재 원소 선택 selected = [0, 1, ..., m]
        visited[i] = true; // 현재 원소 방문 처리
        dfs(arr, depth + 1); // 재귀 함수 호출
        selected.pop(); // 현재 원소 선택 취소
        visited[i] = false; // 현재 원소 방문 처리 취소
    }
}

dfs(arr, 0);
console.log(answer);