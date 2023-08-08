//배열에 같은 문자 있으면 그 개수에 거기에 해당되는 수를 곱한 값들의 합 구하기
function solution(name, yearning, photo) {
  var answer = [];
  var arr = ['may', 'kein', 'kain', 'radi'];
  //console.log(arr.filter(v=>'msay'===v).length);
  //console.log(photo[0].filter(v=>name[0]===v).length*yearning[0]);
  for (i = 0; i < photo.length; i++) {
    var point = 0;
    for (j = 0; j < name.length; j++) {
      //console.log(photo[i]);
      var arr = photo[i];
      //console.log(arr);
      point += arr.filter((v) => name[j] === v).length * yearning[j];
      //photo[i]에 name[j]가 있으면 +yearning[j]점만큼 추가
    }
    answer.push(point);
  }
  return answer;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
