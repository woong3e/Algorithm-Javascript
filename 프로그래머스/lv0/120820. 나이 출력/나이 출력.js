function solution(age) {
    var answer = 0;
    answer = new Date().getFullYear() - age;    //2023년에 문제품. 22년기준 +1
    return answer;
}