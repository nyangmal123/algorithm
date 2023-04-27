let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let t = Number(input[0]);
let line = 1; // 첫 번째 n이 쓰인 line

for(let tc = 0; tc < t; tc++){ // t 만큼 돌린다
    let n = Number(input[line]);
    let arr = [];
    for(let i = line + 1; i <= line + n; i++){
        let data = input[i].split(' ').map(Number);
        arr.push(data); // [x, y]원소로 이뤄진 arr
    }
    // x 기준으로 오름차순 정렬
    arr.sort((x, y) => x[0] - y[0]);

    let count = 0; // 신입사원 최대 수
    let min = 100001; // y의 최하위 순위
    
    for(let [x, y] of arr){
        if(y < min){
            min = y;
            count += 1; // y값이 작으면 신입사원 됨
        }
    }
    console.log(count);
    line += n+1;
}