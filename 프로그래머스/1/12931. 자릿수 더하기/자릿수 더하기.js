function solution(n)
{
    const numbers = [...n.toString().split('')]
    return numbers.reduce((acc, cur) => Number(acc) + Number(cur), 0)
}