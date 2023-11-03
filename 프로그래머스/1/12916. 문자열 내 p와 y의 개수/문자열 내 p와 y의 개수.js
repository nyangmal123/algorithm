function solution(s){
    let arr = [...s.toLowerCase().split('')]
    let pCount = 0;
    let yCount = 0;
    
    arr.forEach((el) => {
        if(el === 'p') pCount++
        else if(el === 'y') yCount++
    })
    
    return pCount === yCount ? true : false
}