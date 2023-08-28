//짝짓어 제거
//효율성 X, 시간초과
function solution(s) {
  if (s.length < 2) {
    return 0;
  }
  var arr = s.split('');
  for (i = 1; i < arr.length; i++) {
    console.log(arr);
    if (arr[i - 1] === arr[i]) {
      arr.splice(i - 1, 1);
      arr.splice(i - 1, 1);
      i -= 2;
    }
  }
  if (arr.length > 0) {
    return 0;
  } else if (arr.length === 0) {
    return 1;
  }
}
console.log(solution('baabaa'));
