function solution(s) {
    var answer1 = '';
    var answer2 = '';
    answer1 = s.split(' ').map(el=>Number(el)).sort((a,b)=>a-b).slice(0,1).toString()
    answer2 = s.split(' ').map(el=>Number(el)).sort((a,b)=>a-b).slice(-1).toString()
    answer1 = parseInt(answer1)
    answer2 = parseInt(answer2)
    answer = answer1<answer2 ? `${answer1} ${answer2}` : `${answer2} ${answer1}`
    return answer;
}