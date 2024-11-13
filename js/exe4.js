//1우리반에는 5명의 친구. 성적을 입력.
//2성적 합산=> 평균,최고점수,최저점수 구 해서
//3 배열, 반복문, 조건문
//4 콘솔에 우리반 평균은??이고, 최고점 은??이고,최저점은??이다.
document.querySelector('#inputvalue').remove();//요소(element)삭제
document.querySelector('#addBtn').remove();//요소(element)삭제
document.querySelector('span').remove();//요소(element)삭제

// let grade =[30,50,60,10,70],
// sum=0,
// average=0,
// max=0,
// min=100;
// for(let i=0;i<grade.length;i++){
//     sum=sum+grade[i]
//     if(grade[i]>max){
//         max=grade[i];
//     }
//     if(grade[i]<min){
//         min=grade[i];
//     }
// }
// average=sum/grade.length;
// console.log(`우리반 평균은${average}이고, 최고점은${max}이고,최저점은${min}`);

// let grade=[], 
// sum=0,
// average=0,
// max=0,
// min=100;

// for(let i=0;i<5;i++){
//     let param1 = parseInt(prompt(`친구의 성적을 입력하세요`))
//     grade.push(param1);
//     sum += param1;
//     if(param1>max){
//     max=param1;
// }
//     if(param1<min){
//     min=param1;
// }
// }
// average=sum/grade.length;
// console.log(`우리반 평균은${average}이고, 최고점은${max}이고,최저점은${min}`);

let grade=[]
for(let i=1;i<=5;i++){
    let param1=parseInt(prompt('점수입력'));
    grade.push(param1);
}

let sum=0,
average=0,
max=0,
min=100;

for(let i=0;i<grade.length;i++){
    sum+=grade[i];

    if(max<grade[i]){
    max=grade[i];
    }
    if(min>grade[i]){
        min=grade[i]
    }
}
average=sum/grade.length;
average=parseInt(average);
console.log(`우리반평균은${average}이고 최고점은${max}이고 최저점은${min}`)