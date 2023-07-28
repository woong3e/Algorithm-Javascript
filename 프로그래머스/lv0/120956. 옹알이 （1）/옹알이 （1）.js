// function solution(babbling) {
//     var answer = 0;
//     // 정규식 풀이
//     // const regex = /^(aya|ye|woo|ma)+$/;
//     //  babbling.forEach(word => {
//     //    if (regex.test(word)) answer++;  
//     //   })
//     let arr = ["aya","ye","woo","ma"];
//     let count = 0;
//     for(el of babbling){
//         for(let i = 0;i<arr.length; i++ ){
//             el.replaceAll(arr[i],' ')
//         }
//         el ===' ' && count ++;
//     }

//     return count;
// }
function solution(babbling){
    var answer = 0;
    let arr = ["aya","ye","woo","ma"];
    
    for(el of babbling){
        for(let j =0; j<arr.length;j++){
           el = el.replaceAll(arr[j],' ');
        }
        if(el.trim().length === 0) {
        answer++;
        }
    }
    return answer;
}
