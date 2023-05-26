function solution(numbers, target) {
    // target이 되는 경우의 수 구하기
    let cnt = 0;
    
    function dfs (currentNum, index) {
        if (index === numbers.length) {
            if (target === currentNum) {
                cnt++;
            }
            return;
        }
        dfs (currentNum + numbers[index], index + 1)
        dfs (currentNum - numbers[index], index + 1)
    }
    
    dfs(0,0);
    return cnt;
}