function solution(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}

// function solution(arr) {
//   let stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) continue;
//     stack.push(arr[i]);
//   }

//   return stack;
// }