function solution(s){
  let count = 0;
  for(const el of s){
    el === '(' ? count++ : count--;
    if(count <0) return false;
  }
  return count ===0 ? true : false;
}