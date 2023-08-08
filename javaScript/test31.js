//
function solution(n, m, section) {
  var answer = 0,
    c = 0;
  while (true) {
    if (section.length === 0) {
      break;
    }
    if (section.length === 1 || section[section.length - 1] < c) {
      answer += 1;
      break;
    }
    var cnt = 0;
    c = section[0] + m;
    for (j = 0; j < section.length; j++) {
      if (section[j] < c) {
        cnt++;
      } else {
        section.splice(0, cnt);
        console.log(section);
        answer += 1;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(5, 4, [2, 7]));
