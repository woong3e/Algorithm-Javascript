function solution(s1, s2) {
    let answer = 0;
    for (s1El of s1){
        for(let i =0; i <s2.length;i++){
            s1El === s2[i] ? answer++ : answer;
        }
    }
    return answer;
}