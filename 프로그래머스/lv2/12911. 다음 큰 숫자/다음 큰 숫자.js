function solution(n) {
    let result = 0;
    for(let i=1;;i++){
        result = n + i;
        if(result > n && result.toString(2).replaceAll('0','').length === n.toString(2).replaceAll('0','').length){
            break;
        }
    }
    return result;
}