function solution(x, n) {
    const arr = [];
    for(let i = 0; i < n; i++){
        arr.push(x + x * i)
    }
    return arr
}