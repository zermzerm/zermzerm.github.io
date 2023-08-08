function solution(n) {
    var answer = 0;
    var arr=[0,1];
    if(n==0){
        return console.log(0);
    }
    for(i=2;i<n+1;i++){
        arr.push((arr[i-2]+arr[i-1])%1234567); // 수가 너무 커지기 때문에 짜피 정답은 1234567로 나눈 나머지니까 여기서 나눈 나머지를 저장해서 안커지게 한다
    }
    return console.log(arr[arr.length-1]);
}

solution(5000);