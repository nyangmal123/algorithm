function solution(my_string) {
    var answer = '';
    const j = my_string.length
    for (i=1; i<=j; i++) {
        answer += my_string[j-i]
    }

    return answer;
}