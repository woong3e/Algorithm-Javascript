function solution(x) {
    let answer = true;
    let num = 0;
    for(el of String(x)){
        num += parseInt(el);
        parseInt(x) % num === 0 ? answer = true : answer = false;
    }
    return answer;
}