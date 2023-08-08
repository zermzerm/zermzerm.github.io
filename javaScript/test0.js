//정렬
function solution(n) {
  var arr = [2, 3, -1, 5, 1, 10],
    arr2 = [];
  console.log(arr.sort());
  console.log(arr.sort().reverse());
  console.log(arr.sort((a, b) => a - b));
  console.log(arr.sort((a, b) => a - b).reverse());
  console.log(arr.sort((a, b) => b - a));
  if (arr2 == 0) {
    console.log('없어유');
  }
  return String.fromCharCode(n);
}

console.log(solution(97));
