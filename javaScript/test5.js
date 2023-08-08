//짝수, 홀수 개수 세기
function solution(num_list) {
  var answer = [];
  var even = 0;
  var odd = 0;
  for (var i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  answer.push(even, odd);
  return answer;
}
console.log(solution([1, 3, 4, 5, 6, 77, 8, 9, 123, 45, 5362]));
