function solution(price, money, count) {
    let answer = 0;
    for(let i=1;i<=count;i++){
        answer += price * i;
    }
    const result = money - answer;
    return result >= 0 ? 0 : Math.abs(result);
}