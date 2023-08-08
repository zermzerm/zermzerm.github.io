// () 괄호의 개수가 일치하고 순서가 알맞게 적혀있나
// 테스트 통과인데 효율성 시간초과뜸 넘어감
function solution(s) {
  var acnt = 0,
    bcnt = 0,
    answer = true;
  if (s[0] == ')') {
    return !answer;
  }
  for (i in s) {
    if (s[i] === '(') {
      acnt += 1;
    } else {
      bcnt += 1;
      if (acnt < bcnt) {
        return !answer;
      }
    }
  }
  return (answer = acnt == bcnt ? answer : !answer);
}
console.log(solution('())('));
