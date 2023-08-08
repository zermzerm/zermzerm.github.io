//
// 1개 시간초과로 안됨 넘어감
function solution(s) {
  var all_cnt = 0,
    zero_cnt = 0;
  var arr = s.split('');
  while (true) {
    if (arr.join('') === '1') {
      break;
    }
    all_cnt++;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === '0') {
        arr.splice(i, 1);
        i--;
        zero_cnt++;
      }
    }
    var two = arr.length.toString(2); //2진법으로 교환
    var arr = two.split('');
    console.log(all_cnt);
  }
  return console.log([all_cnt, zero_cnt]);
}

solution('110010101001');
