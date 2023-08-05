function solution(num) {
    let answer = 0;
    if(num ===1) return 0;
    for(;;){
        answer++;
        if(answer > 500) return -1;
        num % 2 === 0 ? num = num/2 : num = num * 3 + 1;
        if(num === 1) break;
    }
    return answer;
}