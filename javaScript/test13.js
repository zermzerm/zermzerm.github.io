//각 자리 수의 합
function solution(n) {
  var answer = 0;
  n = String(n);
  arr = n.split('');
  for (i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }
  return console.log(answer);
}

solution(123);
