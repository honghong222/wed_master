//even.js
//화면요소에 이벤트 등록하기
// console.dir(document);
// document.onclick=function(){
//   //alert('클릭했습니다.');
//   document.location.href='www.daum.net';
// }

document.querySelector('#showBtn').addEventListener('click',function(){
  console.log('버튼 클릭!');
  document.querySelector('#desc').style.display='block'
  
});
document.querySelector('#hidBtn').onclick=function(){
//document.querySelector('#hidBtn').addEventListener('click',function(){
  document.querySelector('#desc').style.display='none'
  
};

//이미지에 이벤트 등록
document.querySelector('img').addEventListener('mouseover',function(){
  document.querySelector('#desc').style.display='block';
})  

document.querySelector('img').addEventListener('mouseout',function(){
  document.querySelector('#desc').style.display='none';
})  
//이미지 변경하기
let imgAry=['아쿠아.jpg','레드향.jpg','렘.jpg','샤나.jpg']
let idx=0;
document.querySelector('#changeImg').addEventListener('click',function(){
  if(idx>3){
    idx=0;
  }
  let imgeName=imgAry[idx++]
  document.querySelector('img').src='img/'+imgeName
})