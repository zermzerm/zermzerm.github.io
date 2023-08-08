//같은 글자 빼기
function solution(my_string, letter) {
  var answer = '';
  let splitstr = [...my_string]; //== my_string.split('');
  //console.log(splitstr.length);
  for (var i = 0; i < splitstr.length; i++) {
    if (splitstr[i] === letter) {
      console.log(splitstr, i);
      splitstr.splice(i, 1);
      i--;
    }
  }
  answer = splitstr.join('');
  return console.log(answer);
}

solution('AAaAaAaaA', 'A');
