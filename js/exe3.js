//exe.js
//1. 태어난 년도 입력 -> 나이계산.
//2. 직사각형의 너비 계산 -> 가로길이, 세로길이 입력.
//3. 최고값, 최소값 ->입력숫자는 3개.

let question=3;

if(question==1){
  //1번코드
  let param1=prompt('태어난 년도 입력.')
  var year = 2024
  var asd
  asd=year-param1+1
  document.write(asd+'살입니다')
}
else if(question==2){
  let qwe =prompt('직사각형 가로길이 입력.');
  let zxc =prompt('직사각형 세로길이 입력.');
  let iop=qwe*zxc;
  console.log('직사각형 넓이:'+iop);
}


else if(question==3){           
 let a = prompt("첫 번째 숫자"); 
 let b = prompt("두 번째 숫자");                                
 let c = prompt("세 번째 숫자"); 
// if (a >= b) {                   
//   if (a >= c) {                 
//     console.log("최대값은", a);
//   } else {
//     console.log("최대값은", c);
//   }
// } else {
//   if (b >= c) {
//     console.log("최대값은", b);
//   } else {
//     console.log("최대값은", c);
//   }
// }

// if (a <= b) {
//   if (a <= c) {
//     console.log("최소값은", a);
//   } else {
//     console.log("최소값은", c);
//   }
// } else {
//   if (b <= c) {
//     console.log("최소값은", b);
//   } else {
//     console.log("최소값은", c);
//   }
// }
if(a>b&&c){
  console.log('최대값은',a)
}else if(a<b&&c){
  console.log('최소값은',a)
}else if(b>a&&c){
  console.log('최대값은',b)
}else if(b<a&&c){
  console.log('최소값은',b)
}else if(c>a&&b){
  console.log('최대값은',c)
}else (c<a&&b)
  console.log('최소값은',c)

}





// if (a==b||b==c||a==c){ 
// console.log('동일값 존재')
// }else{                                
// let max,min=0;
// if(a>b){
//   //a와b 비교
//  if(a>c){
//  max=a;
// if(b>c){
//  min=c;
// }else{
// max=c;
// min=b;
// }}
// else{
//   let max,min=0;
//   if(b>a){
//     if(b>c){
//       max=b
//     }if(c>a){
//       min=a
//     }else{
//       max=b
//       min=a
//     }
//   }
// }
// }}
// if(c>a){
//   if(c>b){
//     max=c
//   }if{}
// }
