//문자열에 섞인 숫자들의 합 / inNaN(~)해서 숫자면 false 이용
function solution(my_string) {
  var answer = 0;
  var arr = [];
  arr = my_string.split('');
  //console.log(isNaN(parseInt(arr[4])));
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i])) == false) {
      //console.log(arr[i]);
      answer += parseInt(arr[i]);
      //console.log(answer);
    }
  }
  return console.log(answer);
}

solution('aAb1B2cC34oOp');
