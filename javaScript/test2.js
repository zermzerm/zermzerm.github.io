// 간편 if문
function solution(a, b, c) {
  var arr = [];
  var answer = 0;
  arr.push(a, b, c);
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  // if (arr[0] + arr[1] > arr[2]) {
  //   answer = 1;
  // } else {
  //   answer = 2;
  // }
  // return answer;
  arr[0] + arr[1] > arr[2] ? console.log(1) : console.log(2); // 위의 if문과 같은거

  //return console.log(arr);
}
//solution(199,72,223);
solution(199, 72, 222);
