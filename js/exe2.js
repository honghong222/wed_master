//exe2.js

//if와else 문제 풀이


//사용자 값을 입력하도록 "숫자를 입력하세요(0~100)"
//변수선언 후 저장.

//35는 30보다 큽니다.
//25는 30보다 작습니다.
//0부터 100 사이의 값을 입력하세요.
let number1 = 30;
let param1=prompt('숫자를 입력하세요(0~100');

if(param1>100||param1<0){//100보다 큰 경우.
  alert('0~100사이의 값을 입력하세요');
}
if(param1>30){//입력값이 비교값보다 큰경우
  alert(param1+'는'+number1 +'보다 큽니다.');
}
else if(param1==number1){//같은경우
  alert(param1+'는'+number1 +'은 같습니다.');
}
else{//작은경우
  alert(param1+'는'+number1 +'보다 작습니다.');
}
