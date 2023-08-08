//2로 나눠떨어지면 1/2하고, 아니면 *3+1해주고 반복, num이 1이 될때까지 몇번 걸리나, 회수가 500넘어가면 -1
function solution(num) {
  var cnt = 0;
  while (true) {
    if (num === 1) {
      return cnt;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
    // console.log(num);
    if (cnt == 500) {
      return -1;
    }
  }
  return cnt;
}

console.log(solution(300));
