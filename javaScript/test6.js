//일치하는 문자 개수 세기
function solution(s1, s2) {
  var answer = 0;
  var s11 = [],
    s12 = [];
  s11 = s1.join('');
  s12 = s2.join('');
  s11 = [...s11];
  s12 = [...s12];
  for (var i = 0; i < s11.length; i++) {
    for (var j = 0; j < s12.length; j++) {
      if (s11[i] == s12[j]) {
        answer += 1;
        i++;
      }
    }
  }
  return answer;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
