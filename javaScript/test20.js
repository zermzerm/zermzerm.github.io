// 배열 두개에서 하나씩 뽑아서 곱한 값들은 더한값이 가장 작을때의 값
function solution(A, B) {
  var arrA = [],
    arrB = [],
    answer = 0;
  arrA = A.sort((a, b) => a - b);
  arrB = B.sort((a, b) => b - a);
  for (i in arrA) {
    answer += arrA[i] * arrB[i];
  }
  return console.log(answer);
}

solution([1, 4, 2], [5, 4, 4]);
