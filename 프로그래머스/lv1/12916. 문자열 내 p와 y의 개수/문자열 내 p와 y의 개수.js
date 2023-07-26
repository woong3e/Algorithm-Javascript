function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    for (el of s.toLowerCase()){
        if(el === "p"){
            pCount++;
        }
        else if(el ==="y"){
            yCount++;
        }
        else{
            continue;
        }
    }
    answer = pCount - yCount === 0;
    return answer;
}