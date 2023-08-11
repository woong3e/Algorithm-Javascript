function solution(s) {
    let answer = true;
s.length === 4 || s.length === 6 ? answer = s.split('').every(el => !isNaN(el)) : answer = false;
    return answer;
}