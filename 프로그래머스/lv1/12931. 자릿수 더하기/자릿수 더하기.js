function solution(n)
{
    var answer = 0;
    var arr;
    arr = String(n).split('').map(el=>parseInt(el));
    answer = arr.reduce((a,b)=>a+b)

    return answer;
}