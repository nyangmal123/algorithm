function solution(nums) {
    let answer = [... new Set(nums)];
    let max = nums.length / 2;
    
    return answer.length > max ? max : answer.length;
}