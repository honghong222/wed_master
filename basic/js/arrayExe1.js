//arrayExe1.js

let numAry= [34];
numAry.unshift(44)
numAry.unshift(24)
numAry.push(83)
numAry.push(22)
console.log(numAry)
numAry.shift()
numAry.unshift(77)
console.log(numAry)
//
numAry.splice(1,1,55); //수정. 첫번째파람: 인덱스, 두번째:요소갯수,세번째

let dayAry=[]; //일요일,월요일~토요일.
//수요일,화요일,토요일,금요일,월요일,일요일,목요일

dayAry.splice(0,0,'수요일');
dayAry.splice(0,0,'화요일');
dayAry.splice(2,0,'토요일')
dayAry.splice(2,0,'금요일');
dayAry.splice(0,0,'월요일');
dayAry.splice(0,0,'일요일');
dayAry.splice(4,0,'목요일');

console.log(dayAry);
console.log()