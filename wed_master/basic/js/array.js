//array.js

let numAry = new Array();//[]; 배열객체
numAry[0]=10;
numAry.push(20);
numAry.push(25);
numAry.push(35);
let num1 = 10;

//첫번쨰 제거. shift
numAry.shift()
numAry.pop()//마지막
numAry.unshift(99)//첫번째 추가

//console.log(numAry.length);
// for....of 반복문
for(let number of numAry){
  //console.log(number)
}


//배열일 경우에 method. forEacd(함수)
numAry.forEach(function(param1,param2,param3){//param1배열의 요소 param2배열인덱스 param3배열자신
console.log(param1,param2,param3);
});

//배열의 합계
let sum = 0;
numAry.forEach(elem => sum += elem);
console.log(`배열의 합계:${sum}`)

let obj ={
  name:"hong",
  age:20,
  weight:66.7
}
// object 인 경우 for....in 반복문
for(let prop in obj){
  console.log(prop);
}