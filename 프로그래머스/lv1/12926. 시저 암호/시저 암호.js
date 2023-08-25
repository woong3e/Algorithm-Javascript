function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLowerCase();

  let answer = s.split('').map((letter) => {
    if(letter === ' ') {
      return ' ';
    }
    const newArr = upper.includes(letter) ? upper : lower;
  
    let index = newArr.indexOf(letter) + n;
    if(index >=newArr.length){
      index -= newArr.length;
    }
    return newArr[index];
  }).join('')
  
  return answer;
}