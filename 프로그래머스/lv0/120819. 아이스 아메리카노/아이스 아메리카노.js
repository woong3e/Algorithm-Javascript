function solution(money) {
    let answer = [];
    let n = 0;
    let price = 5500;
    while(money - price * n >= 0){
        n++;
    }
    answer.push(n-1,money - price * (n-1));
    return answer;
}