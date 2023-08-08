//맨 앞 문자는 대문자 그외 대문자는 소문자로 바꾸기
// 치욕스럽게 길다! map 공부
function solution(s) {
  var answer = '';
  var answer2 = '';
  var arr = s.split(' ');
  var arr2 = [];
  for (i = 0; i < arr.length; i++) {
    let firstchar = arr[i].charAt(0);
    if (firstchar != firstchar.toUpperCase()) {
      firstchar = firstchar.toUpperCase();
    }
    arr2.push(firstchar);
    for (let x of arr[i]) {
      if (x === x.toUpperCase()) {
        answer += x.toLowerCase();
      } else {
        answer += x;
      }
    }
    answer += ' ';
  }
  arr = answer.split(' ');
  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i].slice(1);
    arr[i] = arr2[i] + arr[i];
    answer2 += arr[i] + ' ';
  }
  answer2 = answer2.slice(0, -1);
  return console.log(answer2);
}

solution('3people unFollowed me');
