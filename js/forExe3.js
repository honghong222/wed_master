//forExe3.js
//점수를 입력+5번.
//점수의 합(sum),평균(average) sum의합 /
//큰값(max)저장.


//합계는 ??이고, 평균은?? 이고, 최고점수는 ?? 입니다.

let sum=0,
average=0,
max=0,
min=100;
for(let i=1;i<=5;i++){
  let param1=prompt ('점수입력.');
  sum=sum+parseInt(param1);
if(param1>max){
  max=param1;
}
if(param1<min){
  min=param1
}
}
average=sum/5;
console.log(`합계는${sum},평균은${average},최고점수는${max},최저점수는${min}`);