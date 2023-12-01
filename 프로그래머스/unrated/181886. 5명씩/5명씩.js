function solution(names) {
    return [...names.filter((el, idx) => idx % 5 === 0)]
}