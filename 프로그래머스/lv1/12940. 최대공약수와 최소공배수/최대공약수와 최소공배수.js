//최대공약수(Greatest Common Divisor, GCD)
//최소공배수(Lowest Common Multiple, LCM)
//유클리드 호제법
//- a, b 를 서로 나눌때, 나누어진다면 b가 최대 공약수 이다. (a > b)
//- 만약 a, b가 나누어지지 않으면 b와 a를 b로 나눈 나머지를 다시 나눈다
//- 서로가 나누어지면 a % b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 a를 b를 나눈 나머지를 다시 나눈다.
//최대공약수는 재귀함수를 사용하여 구할 수 있다.
//최소공배수는 a와 b를 곱한 뒤에 최대공약수로 나누면 최소공배수가 된다.

function solution(n,m) {
    let answer = [];
    let gcd = (a,b) => a % b === 0 ? b : gcd(b, a % b);
    let lcm = (a,b) => (a * b) / gcd(a,b);
    answer = [gcd(n,m),lcm(n,m)];
    return answer;
}