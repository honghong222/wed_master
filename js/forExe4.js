//forExe4.js


let fnames=[];//배열 변수 선언. 복합 자료형
// fname[0]='홍길동';
// fname[1]='김민식';
// fname[2]='박창석';
// //push(값)
// fname.push('박지희')
//배열의 크기를 반환: length.
function addFriendFnc(){
  //사용자 입력값을 확인 => 목록으로 출력.
  let fname=document.querySelector('#inputvalue').value;
  console.log('친구이름',fname); //sum=sum+i
  // document.querySelector('#show').innerHTML=
  //    document.querySelector('#show').innerHTML+`<p>${fname}<p>`
  fnames.push(`<p>${fname}<p>`);

  //출력
  let str=''
  for(let i=0;i<fnames.length;i++){
    str += fnames[i];
  }
  document.querySelector('#show').innerHTML= str;
  //console.log(fname[1])
}

let fnames=[];

function addFriendFnc(){
  let fname=document.querySelector('#inputvalue').value;
  console.log('친구이름',fname); 
  fnames.push(`<p>${fname}<p>`);

  let str=''
  for(let i=0;i<fnames.length;i++){
    str += fnames[i];
  }
  document.querySelector('#show').innerHTML= str;
}