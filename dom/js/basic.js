//

//document object 객체
let ulDom = document.querySelector('ul');
console.log(ulDom.children[0].innerHTML)

//let children = ulDom = document.querySelector('ul').innerHTML;
// children += '<li>수박</li>';
// document.querySelector('ul').innerHTML = children;
//dom 객체에는 메소드(객체생성 메소드 : createElement())
let liTag = document.createElement('li') //<li></li> 요소를 생성
liTag.innerHTML = '수박'; // <li>수박</li>
ulDom.appendChild(liTag); //ulDom요소의 자식요소로 liTag등록

//coding ...
let ptag = document.createElement('p')
ptag.innerHTML='<b>Welcome</b>';
document.querySelector('#show').appendChild(ptag);

let buttonTag = document.createElement('button')
buttonTag.innerText='삭제'
buttonTag.addEventListener('click',(e) => {
  //console.log(e.target.previousElementSibling.remove());

  //console.log(e.target.previousElementSibling.remove());
 // document.querySelector('ul>li:nth-of-type(1)').remove()
  //console.log(document.querySelector('ul').children[0].remove);
})
document.querySelector('#show').appendChild(buttonTag);