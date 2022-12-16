function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter((item)=>{
        if(item%n === 0) {
            return item
        }
    })
    return answer;
}