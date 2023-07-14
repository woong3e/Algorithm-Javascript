const solution = (numbers) => {
    let result =0;
    for(let i=0;i<numbers.length;i++){
        result = (result + numbers[i])
    }
    answer = result/numbers.length;
    return answer;
}
