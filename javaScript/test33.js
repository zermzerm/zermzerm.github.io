//문자열에 변수 집어넣기
//`` 로 문자열 표현하고 안에 ${변수명}으로 표현
function solution(seoul) {
  for (i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`;
    }
  }
}

console.log(solution(['Jane', 'park', 'Kim']));
