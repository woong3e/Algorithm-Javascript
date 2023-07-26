function solution(n) {
    var answer = [];
    for (el of String(n)){
        answer.unshift(Number(el))
    }
    
    return answer;
}