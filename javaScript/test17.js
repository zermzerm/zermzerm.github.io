//제곱근
function solution(n) {
  var answer = 0;
  var arr = [];
  answer = n ** 0.5; // 제곱근 Math.sqrt(n) 방법도 있다
  if (Number.isInteger(answer)) {
    return (answer + 1) ** 2;
  } else {
    return -1;
  }
}
console.log(solution(9));
