function solution(n, k) {
    let answer = 0;
    let number = n.toString(k);
    
    let isPrime = (n) => {
        if(n <= 1) return false;
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) return false;
        }
        return true;
    }
    
    number.split(0).filter((n) => n !== '').map((item) => {
        if(isPrime(item)) answer++;
    })
    
    return answer;
}