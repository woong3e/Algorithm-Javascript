function solution(n) {
    //10진법을 3진법으로 바꾸고 뒤집고 10진법으로 다시 바꾸어주기
    // let answer = 0;
    // answer = parseInt((n.toString(3).split('').reverse().join('')),3);
    
    //spread operator를 사용한 풀이법
    answer = parseInt([...n.toString(3)].reverse().join(''),3);
    return answer;
}