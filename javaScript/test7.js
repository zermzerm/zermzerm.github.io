//각 자리 숫자의 합
function solution(n) {
  var answer = 0;
  var arr = '';
  var arr2 = [];
  arr = String(n); //==n.toString();
  arr2 = arr.split('');
  //   arr2 = n.toString().split('');
  for (var i = 0; i < arr2.length; i++) {
    answer += parseInt(arr2[i]);
  }
  return console.log(answer);
}

solution(123);
