function solution(score) {
    // 1. score의 평균 점수를 구한다.
  	let avg = score.map(v=>(v[0]+v[1])/2);                //[ 75, 70, 55, 65 ]
  	
  	// 2. avg를 내림차순으로 정렬한 배열 sort를 선언한다.
    let sorted = avg.slice().sort((a,b)=>b-a);            //[ 75, 70, 65, 55 ]
  	
  	// 3. avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
    return avg.map(v => sorted.indexOf(v) + 1);            //[ 1, 2, 4, 3 ]

}

//avg요소를 가져와서 sorted에서 가져온 avg요소값의 index값을 찾아서 +1 해줌.