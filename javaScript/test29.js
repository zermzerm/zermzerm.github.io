function solution(num) {
    var cnt = 0;
    while(true){
        if(num===1){
            return cnt;
        }
        num%2===0 ? num=num/2 : num=num*3+1;
        cnt++;
        if(cnt==500){
            return -1;
        }
    }
    return cnt;
}

console.log(solution(626331));