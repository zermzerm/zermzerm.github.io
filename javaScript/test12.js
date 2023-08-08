//문자열 + 띄어쓰기된 숫자들에서 가장 작은수와 가장 큰 수를 띄어쓰기 포함해서 표현 / sort((a,b)=>a-b) 이용
function solution(s) {
  var answer = '';
  arr = [];
  arr = s.split(' ');
  arr.sort(function (a, b) {
    return a - b;
  }); // sort((a,b)=>a-b);
  answer = arr[0] + ' ' + arr[arr.length - 1];
  return console.log(answer);
}

solution('1 2 5 3 4');
