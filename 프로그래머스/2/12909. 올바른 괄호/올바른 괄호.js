function solution(s){
    let stack = [];
    
    s.split('').map((el) => {
        if(el === ')' && stack[stack.length -1] === '(') {
            stack.pop() 
        } else {stack.push(el)}
    })
    
    return stack.length === 0;
}