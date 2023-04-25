let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 중복 값 없앤 후 다시 배열로 반환
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a,b)=>a-b); //오름차순 정렬

// 0부터 매핑 - myMap이라는 객체 딕셔너리 생성
let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++){
    myMap.set(uniqueArray[i],i);
}

// 하나씩 매핑된 값 출력
let answer = '';
for(x of arr) answer += myMap.get(x)+' ';
console.log(answer);