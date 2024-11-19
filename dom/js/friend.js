//friend.js
// this => 함수:window 객체, 이벤트핸들러: 이벤트대상, object: 객체자신
function makeRow(friendInfo = {name,phone,birth,typ}){//이름,연락처,생일 tr생성후 tr반환
  let tr = document.createElement('tr');
  tr.addEventListener('click', function(e) { //this
    //e.stopPropagation()
    console.log(this.children[0].innerHTML)
    document.querySelector('input[name="friendName"]').value=this.children[1].innerHTML;
    document.querySelector('input[name="friendPhone"]').value=this.children[2].innerHTML;
    document.querySelector('input[name="friendBirth"]').value=this.children[3].innerHTML;
    document.querySelector('select[name="friendBloodType"]').value=this.children[4].innerHTML;
  })


  //td input type="checkbox"
  let td = document.createElement('td')
  let inp = document.createElement('input')
  inp.setAttribute('type','checkbox')
  inp.addEventListener('click',(e)=>e.stopPropagation())
  // inp.addEventListener('change',(e)=>{
  //   //헤드쪽 페크박스 값 false
  //   //바디쪽 체크박스 값중 하나 false =>변경
  //   document.querySelector('thead input[type="checkbox"]').checked = true
  //   document.querySelectorAll('tbody input[type="checkbox"]')
  //   .forEach((item)=>{
  //     if(!item.checked){
  //       document.querySelector('thead input[type="checkbox"]').checked = false
  //     }
  //   })
  // })
  inp.addEventListener('change',(e)=>{
   let chk = document.querySelectorAll('tbody input[type="checkbox"]');
    let  chkeds = document.querySelectorAll('tbody input[type="checkbox"]:checkbox');
   //console.log(chk.length,chkeds.length)
   document.querySelector('thead input[type="checkbox"]').checked
   chk.length==chkeds.length ? true : false;
  })
  td.appendChild(inp)
  tr.appendChild(td)


  for(let prop in friendInfo){
    let td = document.createElement('td');
  let fname = friendInfo[prop];
  td.innerHTML=fname;
  tr.appendChild(td);
  }
   td = document.createElement('td')
   btn = document.createElement('button')
  btn.innerHTML = '삭제'
  btn.setAttribute('class','btn btn-danger')
  btn.addEventListener('click', (e) => {
    //상위요소로의 이벤트 전파 차단
    e.stopPropagation()
    e.target.parentElement.parentElement.remove();
  },false)//3번째 매개값의 의미: bubbling, capturing선택
  td.appendChild(btn)
  tr.appendChild(td)
  return tr;
}


//date.js
console.log(friendList);
//배열을 활용하여 친구목록 출력
friendList.forEach((friend)=>{
  document.querySelector('#list').appendChild(makeRow(friend))
})


//추가 버튼에 이벤트
document.querySelector('button.btn.btn-primary').addEventListener('click',(e) => {
  let fname = document.querySelector('input[name="friendName"]').value;
  let fphone = document.querySelector('input[name="friendPhone"]').value;
  let fbirth = document.querySelector('input[name="friendBirth"]').value;
  let ftyp = document.querySelector('select[name="friendBloodType"]').value;
  if(!fname||!fphone||!fbirth||!ftyp){
    alert('필수값입력');
    return;
  }
  let param={name:fname, phone:fphone, birth:fbirth, typ:ftyp}

  let tr =makeRow(param);
  document.querySelector('#list').appendChild(tr);

  document.querySelector('input[name="friendName"]').value = '';
  document.querySelector('input[name="friendPhone"]').value = '';
  document.querySelector('input[name="friendBirth"]').value = '';
  document.querySelector('select[name="friendBloodType"]').value = '';
});


//수정버튼 이벤트
document.querySelector('button:nth-of-type(2)').addEventListener('click',(e)=>{
  console.log('수정버튼.');
  let listTr=document.querySelectorAll('#list tr')
  let name = document.querySelector('input[name="friendName"]').value
  let phone = document.querySelector('input[name="friendPhone"]').value;
  let birth = document.querySelector('input[name="friendBirth"]').value;
  let typ = document.querySelector('select[name="friendBloodType"]').value;
  for(let i=0; i<listTr.length;i++){
    if(listTr[i].children[1].innerHTML==name){
      listTr[i].children[2].innerHTML = phone
      listTr[i].children[3].innerHTML = birth
      listTr[i].children[4].innerHTML = typ
    }
  }
})


//선택삭제 이벤트
document.querySelector('button.btn.btn-danger').addEventListener('click',(e)=>{
  document.querySelectorAll('#list tr')
  .forEach((item)=>{
    console.log(item.children[0].children[0])
    if(item.children[0].children[0].checked){
      item.remove();
    }
      //tr.parentElement.parentElement.remove();
    
  })
})


//전체선택 이벤트 change 이벤트
document.querySelector('thead input[type="checkbox"]').addEventListener('change',(e)=>{
  console.log(e.target.checked) //체크박스 속성
  //대상변겿- tbody input[type="checkbox"]
  document.querySelectorAll('tbody input[type="checkbox"]')
  .forEach((item)=>{item.checked=e.target.checked;
  });
 })
// document.querySelectorAll('thead input[type="checkbox"]').addEventListener('change',(e)=>{
// if(item.checked==false){
//   document.querySelector('thead input[type="checkbox"]').forEach((e)=>{
//     e.target.checked =false
//   })
// }
// })


//정보저장 버튼을 클릭하면 친구의 정보를 localStorage에 저장.
document.querySelector('button.btn-info').addEventListener('click',e=>{
  let ary =[];
  document.querySelectorAll('#list tr').forEach(item =>{
    console.log(item);
    let name=item.children[1].innerHTML; //이름
    let phone=item.children[2].innerHTML; //연락처
    let birth=item.children[3].innerHTML; //생일
    let btype=item.children[4].innerHTML; //혈액형
    let obj = {name,phone, birth, btype}
    console.log(obj);
    ary.push(obj)
  });
  console.log(ary);
  let json = JSON.stringify(ary)
  localStorage.setItem('friendList', json)
})
  