function solution(arr) {
    let answer = [];
    if(arr.length === 1) return [-1];
    const minNum = Math.min(...arr);
    answer = arr.filter(el => el !== minNum);
    return answer;
    }