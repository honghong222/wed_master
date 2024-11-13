//test.js
//1. 1~10 까지 숫자의 합
//2.구구단
//배열 요소 활용 홀수의 합 구하기 = 출력:홀수의 합은??입니다.

// const num=4;
// for(let i=1;i<=9;i++){
//   console.log(`${num}*${i}=${num*i}`)
// }

let numAry=[23,66,92,71,52,49];
let sum=0;
for(let i=0;i<=numAry.length;i++){
  if(numAry[i]%2==1){
    sum+=numAry[i];
  
  }
}
console.log(`홀수의 합은${sum}입니다`);


