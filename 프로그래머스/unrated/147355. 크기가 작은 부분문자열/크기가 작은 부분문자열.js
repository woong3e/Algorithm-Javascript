function solution(t, p) {
    let answer = [];
    let count = 0;
    for(let i=0;i<t.length;i++){
    answer.push(t.slice(i,p.length+i));
      if(t.slice(i,p.length+i).length !== p.length) answer.pop();
    }
    for (el of answer){
      if(Number(el)<=Number(p)) {
        count++;
      }
    }
    return count;
}