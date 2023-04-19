let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

for(let i=0; i<10; i++){
    mySet.add(data[i] % 42); // 중복되는 값을 제외하고 집합의 원소로 넣어줌
}

console.log(mySet.size); // 집합 원소의 개수 출력