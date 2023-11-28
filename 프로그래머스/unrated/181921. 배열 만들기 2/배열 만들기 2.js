function solution(l, r) {
    let result = [];
    for(let i = l; i <= r; i++){
        if(i % 5 !== 0) continue;
        const strNum = String(i)
        if(![...strNum].every((el) => el === '5' || el === '0')) continue;
        result.push(i)
    }
    return result.length ? result : [-1]
}