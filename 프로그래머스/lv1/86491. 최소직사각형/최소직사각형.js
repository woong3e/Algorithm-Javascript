function solution(sizes) {
  //   let widthArr = [];
  //   let width = 0;
  //   let lengthArr = [];
  //   sizes.map(el => el.sort((a,b) => a-b));
  //   for(let i=0;i<sizes.length;i++){
  //     widthArr.push(sizes[i][0]);
  //     lengthArr.push(sizes[i][1]);
  //   }
  // width = Math.max(...widthArr);
  // length = Math.max(...lengthArr);
const arr = sizes.map((el) => {
    const [a, b] = el;
    return {
      width: Math.max(a, b),
      height: Math.min(a, b)
    };
  });
const width = Math.max(...arr.map(el => el.width));
const height = Math.max(...arr.map(el => el.height));
  return width * height;
}