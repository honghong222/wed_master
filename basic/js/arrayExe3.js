//arrayExe3.js
/*empAry => 사원중에서 성별:여자,급여:5000이상.
=> femaleAry저장
*/ 




// let femaleAry=empAry.filter((friend)=>{
//   if(friend.gender=='Female' && friend.salary >5000){
//     return true
//   }
//   return false
// })
// console.log(femaleAry)

let femaleAry=empAry.filter
(emp => emp.gender=='Female' && emp.salary >=5000)
  
console.log(femaleAry)











/*
let friendAry=[
  {name:"홍길동",age:20,weight:56.7},
  {name:"김민기",age:21,weight:93.7},
  {name:"박철순",age:22,weight:79.7},
  {name:"이만수",age:23,weight:88.7}
]

let temp=friendAry.filter((friend)=>{
  if(friend.weight>60){
   console.log(friend);
   return true;
  }
  return false;
})
console.log(temp)  */

let friends = ['홍김동','김민수','박창석','고민형','김형식']
let kimsAry=friends.filter(function(elem){
  console.log(elem);
  if(elem[0] == '김'){
    return true;
  }
  return false;
})
console.log(kimsAry)



let friends = ['홍김동','김민수','박창석','고민형','김형식']
let kimsAry=friends.filter(function(elem){
  console.log(elem);
  if(elem.indexOf'김'==0){
    return true;
  }
  return false;
})
console.log(kimsAry)



let num1=100,str='100'
sum=num1+str
console.log(sum);

let num=17
num1=num/3
num2=num=17%3
console.log(num1,num2)

let sum=0
for(let i=1;i<=100;i++){
  sum=sum+i
}
console.log(sum)