function solution(x, n) {
    var answer = [];
    for(let i=0;i<n;i++){
        y = x*(1+i)
        answer.push(y)
    }
    return answer;
}