function solution(d, budget) {
    //조건 1)최대한 많은 요소 갯수를 더해야 함.
    //조건 2)그 요소들의 합이 budget보다 작아야함.
    //think... 일단 d를 작은순으로 정렬해야겠다.
    let answer = 0;
    let sum = 0;
    let arr = [];
    let newArr = d.sort((a,b) => a-b);
    for(let i = 0;i<d.length;i++){
        sum += d[i];
        arr.push(d[i]);
        // console.log(`i: ${i},sum: ${sum} arr: ${arr}`);
        if(sum>budget) return arr.length-1;
        if(sum===budget) return arr.length;
        
    }
  if(sum < budget) return arr.length;
}