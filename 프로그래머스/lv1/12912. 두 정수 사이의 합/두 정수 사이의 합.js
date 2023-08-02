function solution(a, b) {
    let answer = 0;
    answer = (a+b)/2 * (Math.abs(b-a)+1);
    return answer;
}