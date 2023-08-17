function solution(arr) {
    // let answer = [];
    // for(let i=0;i<arr.length;i++){
    //     (arr[i] !== arr[i + 1]) && answer.push(arr[i]);
    // }
    
    //필터를 쓴다면 아래와 같이 쓸 수 있겠다.
    let answer = arr.filter((el,idx) => el !==arr[idx+1]);
    return answer;
}