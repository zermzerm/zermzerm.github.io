//369 효율X, 무지성
function solution() {
  var answer = [];
  for (i = 1000; i < 1100; i++) {
    arr = [];
    arr.push(String(i).split('3'));
    arr.push(String(i).split('6'));
    arr.push(String(i).split('9'));
    if (arr[0].length + arr[1].length + arr[2].length > 3) {
      answer.push('짝!');
    } else {
      answer.push(i);
    }
  }
  return console.log(answer);
}

solution();
