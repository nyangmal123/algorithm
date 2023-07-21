function solution(begin, target, words) {
    let visited = [];
    let answer = 0;
    let queue = [];

    if(!words.includes(target)) return 0;

    queue.push([begin, answer]);

    while(queue){
        let [cur, cnt] = queue.shift();

        if(cur === target) return cnt;

        words.forEach((word) => {
            let diff = 0;
            
            if(visited.includes(word)) return;
            
            for(let i=0; i < word.length; i++) {
                if(word[i] !== cur[i]) diff++;
            }
            if(diff === 1){
                visited.push(word);
                queue.push([word, ++cnt]);
            }
        })
    }
    
    return answer;
}
