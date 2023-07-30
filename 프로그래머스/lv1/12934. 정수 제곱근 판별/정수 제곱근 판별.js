function solution(n) {
    let answer = 0;
    let num = Math.pow(n,0.5);
    Number.isInteger(num) ? answer = Math.pow(num+1,2) : answer = -1;
    return answer;
}