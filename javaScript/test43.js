//소수들의 합
function solution() {
  var sum = 0;

  for (var i = 1; i <= 200; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (j == i) {
      sum += j;
    }
  }

  return sum;
}
