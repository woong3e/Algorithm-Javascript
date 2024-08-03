function solution(s) {
    let lastChar = new Map();
    let answer = [];
    
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(lastChar.has(char)){
            answer.push(i-lastChar.get(char))
        }
        else{
            answer.push(-1);
        }
        lastChar.set(char,i);
    }
    
    return answer;
}