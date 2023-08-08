function solution(left, right) {
    let answer = 0;
    let arr = [];
    for(let i =0;i<=right-left;i++){
        arr.push(left+i);
        Number.isInteger(Math.sqrt(arr[i])) ? answer -=arr[i] : answer +=arr[i];
    }
    return answer;
}