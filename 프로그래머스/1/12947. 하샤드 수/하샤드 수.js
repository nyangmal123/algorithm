function solution(x) {
    const harshad = x.toString().split('').map(Number).reduce((acc, cur) => acc+cur, 0);
    
    if(x % harshad === 0) return true;
    else return false;
}