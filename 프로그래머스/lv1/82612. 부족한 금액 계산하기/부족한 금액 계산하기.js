function solution(price, money, count) {
    let answer = 0;
    for(let i=1;i<=count;i++){
        answer += price * i;
    }
    let result = money - answer;
    if(result >=0){
        return 0;
    }else if(result<0){
        return Math.abs(result);
    }
    return result;
}