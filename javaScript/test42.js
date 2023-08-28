//369 노 만족
function solution() {
  answer = [];
  for (i = 1001; i < 1101; i++) {
    var s = String(i);
    // console.log(s.indexOf('3'));
    if (s.indexOf('3') != -1 || s.indexOf('6') != -1 || s.indexOf('9') != -1) {
      answer.push('짝!');
    } else {
      answer.push(i);
    }
  }
  return console.log(answer);
}

solution();
