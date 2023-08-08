//정수 각자리 수를 더해서 나눴을때 나눠 떨어지면 true 아니면 false
function solution(x) {
  var n = 0;
  var arr = (x + '').split('');
  for (i = 0; i < arr.length; i++) {
    n += parseInt(arr[i]);
  }
  return x % n === 0; //조건문만 쓰면 답은 맞으면 true 아니면 false로 나온다.
}

console.log(solution(12));
