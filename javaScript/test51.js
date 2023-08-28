function solution(n) {
  var a = n;
  var cnt = 1;
  while (true) {
    if (a == 1) {
      return cnt;
    }

    if (a % 2 == 0) {
      a = a / 2;
    } else {
      a = a - 1;
      cnt++;
    }
  }
}
console.log(solution(6));
