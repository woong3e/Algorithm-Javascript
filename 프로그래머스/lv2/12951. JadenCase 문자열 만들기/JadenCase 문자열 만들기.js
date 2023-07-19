function solution(s) {
    s=s.toLowerCase();
    var answer = '';
    var answer2 = [];
    answer1 = s.split(' ').map(el=>el.split('').toString().charAt(0).toUpperCase())//['3','U','M'
   
    for(let i=0;i<answer1.length;i++){
    answer2.push(s.split(' ')[i].slice(1))
    }
    answer1 = answer1.map((el,index)=>el + answer2[index]).toString().replaceAll(',',' ')
    return answer1;
}
solution("3people unFollowed me")  //expected output : "3people Unfollowed Me"
solution("for the last week")  //expected output : "For The Last Week"