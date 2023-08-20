//1~1만중 8이 몇번 나오는지 ex>8 18 28 ...
//수를 문자열로 바꿔서(str.toString()) 바꾼거[몇번째] 식으로 확인해보기
function solution() {
  var cnt = 0;
  for (i = 1; i < 10001; i++) {
    var len = i.toString().length;
    for (j = 0; j < len; j++) {
      if (i.toString()[j] == '8') {
        cnt++;
      }
    }
  }
  return cnt;
}
