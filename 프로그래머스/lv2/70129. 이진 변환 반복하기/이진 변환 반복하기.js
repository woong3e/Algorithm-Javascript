function solution(s) {
  let answer = [];
  let regex = /0/gi;
  let count1 = 0;
  let count2 = 0;
  while (s !== '1') {
    count1++;
    let matches = s.match(regex);
    count2 += matches ? matches.length : 0;
    s = s.replaceAll('0', '').length.toString(2);
    answer = [count1, count2];
  }
  return answer;
}