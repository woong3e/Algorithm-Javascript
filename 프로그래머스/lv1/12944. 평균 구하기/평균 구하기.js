function solution(arr) {
    var answer = 0;
    answer = arr.reduce((prev,curr)=>prev+curr);
    answer = answer/arr.length;
    return answer;
}