let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// trim() 문자열 양 끝의 공백을 제거
let data = input[0].trim().split(' ');
// 단어가 없다면
if(data ==''){
    console.log(0);
} else {
    console.log(data.length);
}