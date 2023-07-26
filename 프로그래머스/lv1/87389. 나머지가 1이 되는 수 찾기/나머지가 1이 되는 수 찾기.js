function solution(n) {
    var x =0;
    for(let i=0;i<n;i++){
        x = i
    if(n%i ===1) break;
    }
    return x;
}