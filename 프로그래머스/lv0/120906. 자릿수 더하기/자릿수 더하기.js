function solution(n) {
    var answer = 0;
    for (el of String(n)){
        answer += Number(el)
    }
    return answer;
}