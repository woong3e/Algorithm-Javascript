function solution(numbers) {
    let answer = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    for(el of numbers){
        arr = arr.filter(item => item !== el);
    }
    answer = arr.reduce((acc,curr) => acc + curr,0);
    return answer;
}