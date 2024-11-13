//object.js
//객체

let ary=[]; //배열
let obj ={
  name:'홍길동',
  age:20,
  height:169.4
} ;
console.log(`이름${obj.name},나이${obj.age}`);
obj.age=21;
console.log(`이름${obj.name},나이${obj.age}`);
//object타입에서 송성을 반환하는 반복문,for.......in반복문
for(let prop in obj){
  console.log(`prop =>${prop}, 값 => ${obj[prop]}`);
}

//홍길동,김민식,최홍식
ary.push(obj);//홍길동의 정보를 배열에 추가.
ary.push({name:'김민식',age:25,height:190});//김민식의 정보를 배열에 추가
ary.push({name:'최홍식',age:28,height:160});//최홍식의 정보를 배열에 추가

let searchName ='홍길동'
let searchAge =25;
let average =0;
let sum=0
//홍길동의 나이.
for(let i=0;i<ary.length;i++){
  sum+=ary[i].height;
  //if(ary[i]['age']>=searchAge){
//console.log(`이름은${ary[i]['name']}나이는${ary[i].age}키는${ary[i]['height']}`);
  }
//}
average=sum/ary.length;
console.log(Math.round(sum/ary.length*100)/100);
console.log(Math.round(12.555*10)/10);