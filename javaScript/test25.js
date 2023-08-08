function solution(s)
{
    var arr = s.split("");
    if(arr.length<2){
        return 0;
    }
    for(i=1 ;i<arr.length;i++){
        //console.log(arr);
        if(arr[i-1]===arr[i]){
            arr.splice(i-1,1);
            arr.splice(i-1,1);
            i-=2;
        }
    }
    if(arr.length>0){
        return console.log(0);
    }
    else if(arr.length===0){
        return console.log(1);
    }
}

solution("baabaa");