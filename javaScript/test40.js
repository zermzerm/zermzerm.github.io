//369게임
//3자리 이상에서 안돌아감
function solution() {
  var answer = [];

  for (var i = 1000; i <= 1100; i++) {
    if ((i % 10) % 3 == 0 && i % 10 != 0) {
      answer.push('짝!');
    } else if (Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0) {
      answer.push('짝!');
    } else {
      answer.push(i);
    }
  }

  return console.log(answer);
}

solution();
