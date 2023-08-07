function solution(arr, divisor) {
    let answer = [];
    // answer = arr.filter(el => el % divisor === 0).sort((a,b)=>a-b);
    // if(answer.length === 0){
    //     return [-1];
    // }
    answer = arr.filter(el => el % divisor === 0);
    answer.length !== 0 ? answer.sort((a,b) => a-b) : answer = [-1];
    return answer;
}