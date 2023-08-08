//제곱근인지 확인
function solution(n) {
  var answer = 0;
  var arr = [];
  for (var i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  if (arr.length % 2 == 1) {
    answer += 1;
  } else {
    answer += 2;
  }
  return console.log(answer);
}

solution(145);
