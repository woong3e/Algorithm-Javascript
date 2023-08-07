function solution(absolutes, signs) {
    let answer = 0;
    // let newArr = [];
    // for(let i =0; i<signs.length;i++){
    //     signs[i]===true ? newArr.push(absolutes[i]) : newArr.push(-absolutes[i]);
    // }
    // for(el of newArr){
    //     answer += el;
    //  } 
    
    //reduce 메서드를 사용한 풀이
    answer = absolutes.reduce((acc,curr,i) => acc + curr * (signs[i] ? 1 : -1), 0);
    return answer;
}