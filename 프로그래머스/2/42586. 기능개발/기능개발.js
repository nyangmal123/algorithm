function solution(progresses, speeds){
    let leftDays = [];
    let answers = [0];
    
    leftDays = [...progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]))];
    let maxDay = leftDays[0]
    for(let i = 0, j = 0; i < leftDays.length; i++){
        if(leftDays[i] <= maxDay) {
            answers[j] += 1
        } else{
            maxDay = leftDays[i]
            answers[++j] = 1;
        }
    }
    return answers;
}