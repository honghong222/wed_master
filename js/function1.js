//function1

let numAry1=[50,60,40,70,20]
let numAry2=[55,63,42,79,27]

console.log( `sumAry(numAry1)의 합계 =>${sumAry(numAry1)}`);
console.log( `sumAry(numAry2)의 합계 =>${sumAry(numAry2)}`);
console.log(sum(sumAry([10,20,30]),sumAry([10,20])));

//매개값을 배열로 받아서 배열요소의 합.
function sumAry(param1){
  let sum=0;
  for(let i=0;i<param1.length;i++){
    sum+=param1[i]
  }
  return sum;
}

function sum(param1,param2){
  let result=param1+param2;
  return result;
}

//배열을 매개값으로 받아서 요소중에서 제일 큰값을 구하는 함수.
//함수이름은 getMaxValue(배열)s
let sungmin=[50,60,40,70,20];
console.log(getMaxValue(sungmin));

console.log(`제일 큰 값은${getMaxValue(sungmin)}입니다`)
function getMaxValue(hong){
  let max = 0;
  for(let i=0; i<hong.length;i++){
    if(max<hong[i]){
      max=hong[i];
    }
  }
  return max;
}

//Math.random()활용해서 11~20사이의 임의 수를 생성:
//배열[5]에 저장.
let randomAry=[]
function makeNumberFnc(){
  for(let i=1;i<=5;i++){
    
    let temp=parseInt(Math.random()*10+11);
    randomAry.push(temp);
  }
  console.log(randomAry);
  sumAry(randomAry);
  return sumAry(randomAry);
}
console.log(`임의의 배열의 합은${makeNumberFnc()}입니다`)

//결과:임의의 배열의 합은??입니다.