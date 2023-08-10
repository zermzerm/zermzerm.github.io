//limit을 넘지않는 people의 합의 최소 묶음(배에 태움) + 아 2명씩밖에 못탐
//시간초과
function solution(people, limit) {
  var answer = 0,
    sum = 0,
    cnt = 0;
  people.sort((a, b) => a - b);
  for (i = 0; i < people.length; i++) {
    for (j = 1; j < people.length - i; j++) {
      if (people[i] + people[people.length - j] <= limit) {
        cnt++;
        people.splice(i, 1);
        people.splice(people.length - j, 1);
        i--;
      }
    }
  }
  cnt += people.length;
  return cnt;
}
console.log(solution([10, 20, 30, 40, 50, 50, 60, 70, 80], 100));

// [10, 20, 30, 40, 50, 50, 60, 70, 80]
