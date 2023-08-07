function solution(phone_number) {
    let answer = '';
    //1. for 문을 사용해서 풀었다.
    // for (let i = 0; i < phone_number.length - 4; i++) {
    //     answer += '*';
    // }
    // answer += phone_number.slice(-4);
    
    //2. repeat을 사용한 풀이
    answer = '*'.repeat(phone_number.length-4);
    answer += phone_number.slice(-4);
    return answer;
}