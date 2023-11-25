function solution(s) {
    let result = 0;
    let stack = [];
    
    if(s.length % 2 === 1) return 0;
    
    for(let i = 0; i < s.length; i++){
        let changedChar = s.slice(i) + s.slice(0, i)
        let isRight = true;
        for(let char of changedChar){
            if(char === '[' || char === '{' || char === '(') stack.push(char)
            else {
                let last = stack.pop()
                if(char === ']' && last === '[') continue;
                if(char === ')' && last === '(') continue;
                if(char === '}' && last === '{') continue;
                isRight = false;
                break;
            }
        }
        if(isRight) result++
    }
    return result;
}