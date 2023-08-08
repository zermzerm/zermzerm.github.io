//문자열에 들어간 모음 빼기
function solution(my_string) {
  var answer = '';
  var arr = ['a', 'e', 'i', 'o', 'u'];
  var arr_my = [];
  arr_my = my_string.split('');
  for (var i = 0; i < arr_my.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr_my[i] == arr[j]) {
        arr_my.splice(i, 1);
        i--;
      }
    }
  }
  return answer;
}
