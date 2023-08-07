function solution(s) {
    let answer = '';
    let mid = s.length / 2;
    answer = s.length % 2 !== 0 ? s.substring(mid,mid+1) : s.substring(mid-1,mid+1);
    return answer;
}