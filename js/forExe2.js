//forExe2.js
//1~10 까지의 2의 배수, 3의 배수 => sum2.sum3 변수 저장.
//for반복문,조건문

//2의 배수의 합은 ???,3의 배수의 합은 ???입니다. 콘솔에 출력

// const num1=2;
// const num2=3;
// for(let i=1;i<=10;i++){
//   if(i%3==1){
//     console.log(num1*i);
//   }else{
//     console.log(num2*i);
//   }sum=sum+i
// }
// console.log(2의배수 랍은)




let sum2=0,
sum3=0;
for(let i=1;i<=10;i++){
  if(i%2==0){
    sum2=sum2+i;
  }
  else if(i%3==0){
    sum3=sum3+i;
  }
}
console.log(`'2의 배수의 합은 ${sum2} ,3의 배수의 합은 ${sum3}'`);