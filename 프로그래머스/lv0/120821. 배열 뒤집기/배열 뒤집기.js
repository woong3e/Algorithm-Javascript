function solution(num_list) {
    let answer = [];
        num_list.map(el=>answer.unshift(el));
    return answer;
}