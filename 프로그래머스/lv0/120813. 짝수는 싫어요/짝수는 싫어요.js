function solution(n) {
    var answer = [];
        for(i=0;i<=n;i++) {
            if(i%2 === 0) continue
            answer.push(i)
        }
    return answer;
}