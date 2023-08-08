//못품
//
function solution(s, skip, index) {
  var skip_arr = [],
    s_arr = [],
    ans_arr = [];
  for (i in skip) {
    skip_arr.push(skip.charCodeAt(i));
  }
  skip_arr.sort((a, b) => a - b);
  console.log(skip_arr + ' skip_arr');
  for (i in s) {
    if (s.charCodeAt(i) > 122) {
      s_arr.push(s.charCodeAt(i) - 26);
    } else {
      s_arr.push(s.charCodeAt(i));
    }
  }
  //아스키 코드로 104 97 112 112 121 나와야함
  console.log(s_arr + ' 처음변환 s_arr');
  for (i = 0; i < s_arr.length; i++) {
    //console.log(s_arr);
    var cnt = 0;
    for (j = 0; j < skip_arr.length; j++) {
      if (s_arr[i] <= skip_arr[j] && skip_arr[j] <= s_arr[i] + index) {
        cnt += 1;
      }
    }
    console.log(cnt);
    if (s_arr[i] + cnt + index > 122) {
      s_arr.splice(i, 1, s_arr[i] + cnt + index - 26);
    } else {
      s_arr.splice(i, 1, s_arr[i] + cnt + index);
    }
  }
  console.log(s_arr + ' cnt만큼 증가한 s_arr');
  for (i = 0; i < s_arr.length; i++) {
    for (j = 0; j < skip_arr.length; j++) {
      if (s_arr[i] === skip_arr[j]) {
        s_arr.splice(i, 1, s_arr[i] + 1);
        i--;
        break;
      }
    }
  }
  if (s_arr[i] > 122) {
    s_arr.splice(i, 1, s_arr[i] - 26);
  }

  console.log(s_arr + ' 변환끝난 s_arr');
  for (i = 0; i < s_arr.length; i++) {
    ans_arr.push(String.fromCharCode(s_arr[i]));
  }
  return ans_arr.join('');
}

console.log(solution('wertsdfgxcvb', 'iophjkm', 12)); //happy나옴 => 아스키 코드로 104 97 112 112 121
