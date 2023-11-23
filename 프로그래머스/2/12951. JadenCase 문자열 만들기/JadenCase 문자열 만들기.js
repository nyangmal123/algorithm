function solution(s) {
    
    const sentence = s.split(' ').map((word, index) => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    return sentence.join(' ')
}