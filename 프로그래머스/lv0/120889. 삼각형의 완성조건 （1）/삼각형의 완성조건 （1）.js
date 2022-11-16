function solution(sides) {
    var answer = 0;
    // sides의 원소 3개 줄세우기
    // 제일 큰거 < 나머지의 합 만족하면 1 리턴
    // 아니면 2 리턴
    answer = sides.sort();
    
    if (answer[2] < answer[0] + answer[1]){
        return 1;
    }
    else {
        return 2
    }
}