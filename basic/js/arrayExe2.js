//arrayExe2.js
// let dupAry=['홍길동','김민혁','장동숙','홍길동','홍길도','김민']

// let newAry=dupAry.filter(function(elem,idx){
//   console.log(elem,idx)
//   if(dupAry.indexOf(elem)==idx){
//     return true
//   }
//   return false
// })

// console.log(newAry);




let dupAry=['홍길동','김민혁','장동숙','홍길동','홍길도','김민']

let newAry=dupAry.filter(function(elem,idx,ary){
  console.log(elem,idx)
  if(ary.indexOf(elem)==idx){
    //tempAry.push(elem);
    return true
  }
  return false
})

console.log(newAry);