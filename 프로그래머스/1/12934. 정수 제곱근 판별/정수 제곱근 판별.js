function solution(n) {
    const x = Math.sqrt(n)
    if(x % 1 === 0) return (x+1) * (x+1)
    else return -1
}