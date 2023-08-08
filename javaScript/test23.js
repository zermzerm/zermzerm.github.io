//
function solution(n) {
  var a = n.toString(2);
  var a2 = a.split('');
  var acnt = a2.filter((v) => '1' === v).length;
  var b = n;
  while (true) {
    b += 1;
    var b2 = b.toString(2).split('');
    var bcnt = b2.filter((v) => '1' === v).length;
    if (acnt === bcnt) {
      break;
    }
  }
  return console.log(b);
}

solution(78);

//미친 방법 match()활용
/*function solution(n,a=n+1){
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
console.log(solution(78));*/
