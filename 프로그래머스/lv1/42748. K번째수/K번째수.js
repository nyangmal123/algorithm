function solution(array, commands) {
    var answer = [];
    commands.map((v) => {
        let [i, j, k] = v
        answer.push(array.slice(i - 1, j).sort((a,b) => a - b)[k - 1]);
    })
    return answer;
}