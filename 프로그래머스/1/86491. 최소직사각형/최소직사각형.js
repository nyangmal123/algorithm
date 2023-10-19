function solution(sizes){
    sizes.map((el) => {
        if(el[0] < el[1]) el.reverse()
    })
    const wide = sizes.sort((a, b) => b[0] - a[0])[0][0];
    const height = sizes.sort((a, b) => b[1] - a[1])[0][1];
    return wide * height;
}
