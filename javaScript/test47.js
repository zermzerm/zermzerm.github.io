//문자 빈도수 조사
//Object 객체 활용법
//객체에 key값 찾을때 쓰는 includes
function solution(str) {
  var str_arr = str.split(' ').join('').toLowerCase();
  var answer = {};
  for (i = 0; i < str_arr.length; i++) {
    if (Object.keys(answer).includes(str_arr[i])) {
      answer[str_arr[i]] += 1;
    } else {
      answer[str_arr[i]] = 1;
    }
  }
  return answer;
}
