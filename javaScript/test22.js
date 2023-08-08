function solution(n){
    var arr=[],cnt=0;
    for(i=1;i<n+1;i++){
        var a=0;
        for(j=i;j<n+1;j++){
            a+=j;
            if(a===n){
                cnt++;
            }
            else if(a>n){
                break;
            }
        }
    }
    return console.log(cnt);
}

solution(14);