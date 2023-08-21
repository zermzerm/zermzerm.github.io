//겹치는 구간 찾기
//배열중 최소값 찾기 => Math.min(...배열이름)
//배열중 최대값 찾기 => Math.max(...배열이름)
function solution(input) {
  var arr = [];
  var a = [];
  var b = [];
  var c = [];
  var answer = [];
  arr = input.split('\n');
  for (i = parseInt(arr[0]); i < parseInt(arr[1]) + 1; i++) {
    a.push(i);
  }
  for (i = parseInt(arr[2]); i < parseInt(arr[3]) + 1; i++) {
    b.push(i);
  }
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        c.push(a[i]);
      }
    }
  }
  if (c != 0) {
    answer.push(Math.min(...c));
    answer.push(Math.max(...c));
  } else {
    return 'X';
  }
  return answer;
}
