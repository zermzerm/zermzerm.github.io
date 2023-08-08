//hash공부
//문자 하나씩 비교해서 중복으로 적힌 문자 있으면 그게 지금꺼 기준 몇번째 앞에 있나, 중복 없으면 -1
function solution(s) {
  var answer = [],
    arr = [],
    end = [];
  answer = s.split('');
  for (i = 0; i < answer.length; i++) {
    //console.log(arr.filter(v=>answer[i]===v).length>0);
    if (arr.filter((v) => answer[i] === v).length > 0) {
      var cnt = [];
      arr.push(answer[i]);
      for (j = 0; j < arr.length; j++) {
        if (arr[j] === answer[i]) {
          cnt.push(j);
        }
      }
      cnt.sort((a, b) => b - a);
      end.push(cnt[0] - cnt[1]);
    } else {
      arr.push(answer[i]);
      end.push(-1);
    }
  }
  console.log(answer);
  return end;
}

console.log(solution('bananna'));

/* 정석 정답
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
} */
