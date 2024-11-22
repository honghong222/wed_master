//login.html

const memberDate = JSON.parse(localStorage.getItem('memberDate'));

document.querySelector('button.btn-primary').addEventListener('click',(e)=>{
  let id = document.querySelector('#uid').value;
  let pw = document.querySelector('#upw').value;

  let loginInfo = memberDate.filter(member => member.id == id && member.pw == pw)

  if(loginInfo.length){
    localStorage.setItem('logId', id);
    localStorage.setItem('logName',loginInfo[0].name);
    location.href = 'main.html';
  }else{
    alert('아이디,비밀번호를 확인하세요!');
  }
});