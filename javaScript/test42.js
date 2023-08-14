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

  // for i in range(1000):
  //     s = str(i)
  //     if any(x in s for x in ['3', '6', '9']):
  //         num.append('짝')
  //     else:
  //         num.append(i)
}

solution();
