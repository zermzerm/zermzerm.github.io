function solution(n) {
    var arr=String(n).split("");//String(n) 말고 (n+"")도 된다. => (n+"").split("").sort().reverse().join("")
    arr.sort((a,b)=>b-a); //정렬은 sort()만 써도 되고, 거꾸로 하려면 sort().reverse()로 하면 되기도 함
    return +arr.join("");
}

console.log(solution(118372));