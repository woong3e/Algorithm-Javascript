function solution(num) {
    let answer = 0;
    for(;;){
        if(num ===1) return 0;
        answer++;
        if(answer > 500) return -1;
        num % 2 === 0 ? num = num/2 : num = num * 3 + 1;
        if(num === 1) break;
    }
    return answer;
}