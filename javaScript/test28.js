//두 수 입력했을 때 최소값에서 최대값까지 수의 합
function solution(a, b) {
  var answer = 0; //for문에서 var  i=에 Math.min(a,b)을 쓰면된다 / i<에는Math.max(a,b)하면된다 => 잉? 근디 같은 경우에는 어케되지?
  if (a < b) {
    for (i = a; i < b + 1; i++) {
      answer += i;
    }
  } else if (a > b) {
    for (i = b; i < a + 1; i++) {
      answer += i;
    }
  } else {
    answer += a;
  }
  return answer;
}

console.log(solution(3, 6));
