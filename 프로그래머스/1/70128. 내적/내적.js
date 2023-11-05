function solution(a, b) {
    // let result = 0;
    // for(let i = 0; i < a.length; i++){
    //     result += a[i] * b[i]
    // }
    // return result;
    
    return a.reduce((acc, _, index) => acc + a[index] * b[index], 0)
}