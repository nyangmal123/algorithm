function solution(n, k) {
    var answer = 0;
    // 12000*n + 2000*k
    // n===10일때 k-1
    answer = 12000*n + 2000*k
    if (n >= 10) {
        let i = parseInt(n / 10);
        answer = 12000*n + 2000*(k-i);
    }
    return answer;
}