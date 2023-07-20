function solution(num_list) {
    var answer = [];
    let evenCount =0;
    for(let el of num_list){
        if(el%2 ===0) evenCount++;
    }
    answer.push(evenCount,num_list.length - evenCount);
    return answer;
}