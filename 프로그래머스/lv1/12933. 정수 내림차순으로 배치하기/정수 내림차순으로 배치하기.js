function solution(n) {
    let answer = 0;
    let newArr = [];
    newArr.push(String(n).split(''));
    newArr.map(el => el.sort((a,b)=>b-a));
    answer = parseInt(newArr.toString().replaceAll(',',''));
    return answer;
}