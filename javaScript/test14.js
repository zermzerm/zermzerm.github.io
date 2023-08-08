//아래의 수 중에서 나눴을때 나머지가 1인 수 중 최소
function solution(n) {
  var x = 0;
  arr = [];
  for (i = 1; i < n + 1; i++) {
    if (n % i == 1) {
      arr.push(i); // => 여기서 그냥 return i; 하고 아래 return 지우면 제일 작은 값의 i가 return 되므로 그냥 된다.
    }
  }
  console.log(arr);
  return arr[0];
}
console.log(solution(144));
