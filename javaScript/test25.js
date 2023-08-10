//문자열에서 하나씩 비교하면서 같으면 지우고 다시 비교, 짝맞게 다 지워지면 0, 하나라도 남으면 1
//오류
function solution(s) {
  var arr = s.split('');
  if (arr.length < 2) {
    return 0;
  }
  for (i = 1; i < arr.length; i++) {
    //console.log(arr);
    if (arr[i - 1] === arr[i]) {
      arr.splice(i - 1, 1);
      arr.splice(i - 1, 1);
      i -= 2;
    }
  }
  if (arr.length > 0) {
    return console.log(0);
  } else if (arr.length === 0) {
    return console.log(1);
  }
}

solution('baabaaba');
