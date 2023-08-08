//문자 반복
function solution(my_string, n) {
  var answer = '';
  var answer2 = '';
  let str = my_string;
  let splitstr = [...str];
  //console.log(splitstr);
  for (var i = 0; i < splitstr.length; i++) {
    splitstr[i] = splitstr[i].repeat(n);
    answer += splitstr[i];
  }
  return answer;
}
console.log(solution('hello', 3));
//console.log(solution("hello",3));
