//문자 개수 세서 비교
function solution(s) {
  var answer = true;
  var pcnt = 0;
  var ycnt = 0;
  var arr = s.split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'p' || arr[i] == 'P') {
      pcnt += 1;
    } else if (arr[i] == 'y' || arr[i] == 'Y') {
      ycnt += 1;
    }
  }
  //console.log(acnt);
  //console.log(bcnt);

  if (pcnt == ycnt) {
    return console.log(answer);
  } else {
    return console.log(!answer);
  }
}

solution('PpPyY');
