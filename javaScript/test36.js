//카펫 색깔개수보고 가로세로 구하기
function solution(brown, yellow) {
  var answer = [];
  var br = brown - 4;
  if (yellow == 1) {
    return [3, 3];
  }
  for (i = 1; i < yellow; i++) {
    var a = 0,
      b = 0;
    if (yellow % i == 0) {
      a = i;
      b = yellow / i;
      if (answer.filter((v) => a === v).length == 1) {
        break;
      }
      if (a * 2 + b * 2 == br) {
        answer.push(b, a);
      }
    }
  }
  answer[0] = answer[0] + 2;
  answer[1] = answer[1] + 2;
  return answer;
}
console.log(solution(24, 24));
