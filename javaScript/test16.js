//숫자 순서 뒤집기
function solution(n) {
  var answer = (n + '').split('');
  answer.reverse();
  for (i = 0; i < answer.length; i++) {
    answer[i] = parseInt(answer[i]);
  }
  return console.log(answer.join(''));
}

solution(12345);
