//firExe1.js

//3*1=3
//3*2=6
//<table border="2">;
//<tr style="background:pink"><td>3*1</td><td>=</td><td>3</td></tr>
//<tr style="background:cyon"><td>3*2</td><td>=</td><td>6</td></tr>
//<table>
// const num=3;
// document.write('<table border="2">');
// for(let i=1;i<=9;i++){
//   document.write(num+'*'+i+'='+num*i+'<br>')
// }
// document.write('<table>');







document.write('<table border="2"style="">');
for(let j=2; j<=9;j++){
const num=j;
for(let i=1;i<=9;i++){
  if(i%2==1){
    document.write('<tr style="background: pink;">','<td>',num+'*'+i+'</td>','<td>','=','</td>','<td>'+num*i+'<br>','</td>','</tr>')
  }else{
      document.write(`<tr style="background: cyan;"><td>${num}*${i}</td><td>=</td><td>${num*i}<br></td></tr>`)
    }

    
  }//end of for(let i=1....)
}
document.write('<table>');