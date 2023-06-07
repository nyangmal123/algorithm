function solution(numbers) {
    let answer = '';
    answer = numbers
        // 문자열 변환
        .map((i) => i.toString())
        // a+b, b+a 비교 
        // 내림차순
        .sort((a, b) => (b + a) - (a + b))
        .join('');
    return answer[0] === '0' ? '0' : answer;
}