//끝말잇기 몇번째 사람이 몇번째 턴에 실패했는지
function solution(n, words) {
  var answer = [];
  var cnt = 1;
  for (i = 0; i < words.length; i++) {
    if (i + 1 > 1 && (i + 1) % n == 1) {
      cnt++;
    }
    if (i > 0) {
      for (j = 0; j < i; j++) {
        if (words[i] == words[j]) {
          var who = 0;
          who = (i + 1) % n;
          if (who == 0) {
            who = n;
          }
          answer.push(who, cnt);
          return answer;
        }
      }
    }
    if (i == words.length - 1) {
      return [0, 0];
      break;
    }
    if (words[i].slice(-1) != words[i + 1][0]) {
      var who = 0;
      who = (i + 2) % n;
      if (who == 0) {
        who = n;
      }
      answer.push(who, cnt);
      return answer;
    }
  }
}
console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);
