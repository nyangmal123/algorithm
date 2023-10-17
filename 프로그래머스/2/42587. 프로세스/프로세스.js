function solution(priorities, location) {
    let copyPriorities = [...priorities];
    let queue = priorities.map((priority, idx) => ({priority, idx}));
    let count = 0;
    
    while(queue.length){
        const max = Math.max(...copyPriorities);
        const {priority, idx} = queue.shift();
        if(priority >= max){
            count++;
            copyPriorities[idx] = 1;
            if(idx === location) break;
        } else {
            queue.push({priority, idx});
        }
    }
    
    return count;
}