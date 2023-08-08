//배열중 divisor로 나눴을때 나눠 떨어진 값 배열로 표현, 없으면 -1
function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer == 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
