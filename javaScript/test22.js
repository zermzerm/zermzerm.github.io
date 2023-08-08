//n이하의 수 중에서 연속해서 더했을때 n이 나오는 경우의 수
function solution(n) {
  var arr = [],
    cnt = 0;
  for (i = 1; i < n + 1; i++) {
    var a = 0;
    for (j = i; j < n + 1; j++) {
      a += j;
      if (a === n) {
        console.log(i);
        cnt++;
      } else if (a > n) {
        break;
      }
    }
  }
  return console.log(cnt);
}

solution(14);
