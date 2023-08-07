function solution(absolutes, signs) {
    let answer = 0;
    let newArr = [];
    for(let i =0; i<signs.length;i++){
        signs[i]===true ? newArr.push(absolutes[i]) : newArr.push(-absolutes[i]);
    }
    for(el of newArr){
        answer += el;
     }
    return answer;
}