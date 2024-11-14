//operator.js

let addFnc=(e)=>{
  console.log(e.target.innerHTML);
  let v1=document.getElementById('num1').value;
  let v2=document.querySelector('#num2').value;
  if(!v1||!v2){
    alert('누가 봐도 빈칸인데 왜 안채우는거죠??')
    return;
  }
  let result;
  if(e.target.innerHTML=='더하기'){
  result=parseInt(v1)+parseInt(v2); //parseInt()기능: '12' =>12 로 빠꿈
}else if (e.target.innerHTML=='빼기'){
  result=parseInt(v1)-parseInt(v2);

}else if(e.target.innerHTML=='곱하기'){
  result=parseInt(v1)*parseInt(v2);
}else if(e.target.innerHTML=='나누기'){
  result=parseInt(v1)/parseInt(v2);
}
  document.querySelector('#result').value=result;
}
document.querySelector('button:nth-of-type(1)').addEventListener('click',addFnc);//이벤트핸들러.
document.querySelector('button:nth-of-type(2)').addEventListener('click',addFnc);//이벤트핸들러.
document.querySelector('button:nth-of-type(3)').addEventListener('click',addFnc);//이벤트핸들러.
document.querySelector('button:nth-of-type(4)').addEventListener('click',addFnc);//이벤트핸들러.



// let addFn=()=>{
//   let v1=document.getElementById('num1').value;
//   let v2=document.querySelector('#num2').value;
//   let result=parseInt(v1)-parseInt(v2);
  
//   document.querySelector('#result').value=result;
// }
// document.querySelector('button:nth-of-type(2)').addEventListener('click',addFn)



// let addF=()=>{
//   let v1=document.getElementById('num1').value;
//   let v2=document.querySelector('#num2').value;
//   let result=parseInt(v1)*parseInt(v2);
  
//   document.querySelector('#result').value=result;
// }
// document.querySelector('button:nth-of-type(3)').addEventListener('click',addF)




// let adb=()=>{
//   let v1=document.getElementById('num1').value;
//   let v2=document.querySelector('#num2').value;
//   let result=parseInt(v1)/parseInt(v2);
  
//   document.querySelector('#result').value=result;
// }
// document.querySelector('button:nth-of-type(4)').addEventListener('click',adb)








