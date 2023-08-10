//2의 제곱근의 시합의 수 n번 중에서 a와 b는 몇번째 라운드에서 만날까
// 50%맞고 50%틀림 -> 뭔가 허점 있음
function solution(n, a, b) {
  var cnt = 0,
    arr = [],
    arr2 = [];
  for (i = 1; i < n + 1; i++) {
    arr.push(i);
    if (n % i == 0) {
      arr2.push(i);
    }
  }
  arr2.shift();
  arr2.pop();
  //   console.log(arr);
  //   console.log(arr2);

  for (i = 0; i < arr.length; i++) {
    if (arr.length == 1) {
      break;
    }
    console.log(i);
    if (arr[i] == a && arr[i + 1] == b) {
      cnt++;
      return cnt;
    } else if (arr[i + 1] == a || arr[i + 1] == b) {
      arr.splice(i, 1);
    } else {
      arr.splice(i + 1, 1);
    }
    if (arr.length == arr2[arr2.length - 1]) {
      i = -1;
      arr2.pop();
      cnt++;
    }
  }

  return cnt;
}

console.log(solution(16, 5, 7));
