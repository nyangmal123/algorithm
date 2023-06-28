function solution(maps) {
    // bfs 최단거리 칸 개수의 최솟값 answer 
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    let n = maps.length;
    let m = maps[0].length;
    
    let queue = [[0, 0, 1]];
    
    while (queue.length) {
        const [x, y, answer] = queue.shift();
        
        if(x === n - 1 && y === m -1 ) return answer;
        
        for(let i = 0; i < 4; i++){
            
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, answer + 1]);
            }
            
        }
    }
    return -1;
}
