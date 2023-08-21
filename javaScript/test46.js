//문자열로된 숫자들을 가진 배열을 정수형으로 다 바꾸는 법
//mapfn 정의해서 쓴다
function solution(numbers) {
  var mapfn = (arg) => Number(arg);
  var arr = numbers.split(',').map(mapfn);
  console.log(arr);
}
