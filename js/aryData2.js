//aryData2.js
document.querySelector('#inputvalue').remove();//요소(element)삭제
document.querySelector('#addBtn').remove();//요소(element)삭제
document.querySelector('span').remove();//요소(element)삭제

// let numAry = [22,45,18,41,98,55];
// let max=0;
// for(let i=0;i<numAry.length;i++){
//   //if(i%2==0||numAry[i]>40){
//   if(max<numAry[i]){  
//   console.log(numAry[i]);
// max=numAry[i]
//   }
// }

let n = prompt('아무값이나 입력')

let numAry = [22,45,18,41,98,55];
let k=0
//let max=0;
for(let i=0;i<numAry.length;i++){
  if(parseInt(n)<numAry[i]){
    k += numAry[i];
  }

}
console.log(k);
