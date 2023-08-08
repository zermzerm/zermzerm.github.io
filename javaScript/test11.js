//배열의 평균값 구하기
function solution(arr) {
  var answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}
console.log(solution([1, 2, 4, 5, 6, 7, 8, 3, 3]));
