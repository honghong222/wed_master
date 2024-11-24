bookList.forEach((e) => {
  document.querySelector('#list').appendChild(makeRow(e))
})


document.querySelector('button.btn.btn-primary').addEventListener('click', (e) => {
  let ocode = document.querySelector('input[name="bookn"]').value;
  let oname = document.querySelector('input[name="bookc"]').value;
  let oauthor = document.querySelector('input[name="bookj"]').value;
  let opress = document.querySelector('input[name="bookk"]').value;
  let oprice = document.querySelector('input[name="bookh"]').value;
  if (!ocode || !oname || !oauthor || !opress || !oprice) {
    alert('공백을 채우세요.');
    return;
  }
  let param = {
    bookCode: ocode,
    bookname: oname,
    bookauthor: oauthor,
    bookpress: opress,
    bookprice: oprice
  }
  let tr = makeRow(param);
  document.querySelector('#list').appendChild(tr);

  document.querySelector('input[name="bookn"]').value = '';
  document.querySelector('input[name="bookc"]').value = '';
  document.querySelector('input[name="bookj"]').value = '';
  document.querySelector('input[name="bookk"]').value = '';
  document.querySelector('input[name="bookh"]').value = '';
});


function makeRow(bookInfo = {
  code,
  name,
  author,
  press,
  price
}) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    console.log(this.children[0].innerHTML)
    document.querySelector('input[name="bookCode"]').value = this.children[0].innerHTML;
    document.querySelector('input[name="bookName"]').value = this.children[1].innerHTML;
    document.querySelector('input[name="author"]').value = this.children[2].innerHTML;
    document.querySelector('select[name="press"]').value = this.children[3].innerHTML;
    document.querySelector('select[name="price"]').value = this.children[4].innerHTML;
  })

let td = document.createElement('td')
let inp = document.createElement('input')
inp.setAttribute('type', 'checkbox')
inp.addEventListener('click', (e) => e.stopPropagation())
inp.addEventListener('change', (e) => {
  let chk = document.querySelectorAll('tbody input[type="checkbox"]');
  let chkeds = document.querySelectorAll('tbody input[type="checkbox"]:checkbox');
  document.querySelector('thead input[type="checkbox"]').checked
  chk.length == chkeds.length ? true : false;
})
td.appendChild(inp);
tr.appendChild(td);

for(let prop in bookInfo){
  let td = document.createElement('td');
let ocode = bookInfo[prop];
td.innerHTML=ocode;
tr.appendChild(td);
}
 td = document.createElement('td')
 btn = document.createElement('button')
btn.innerHTML = '삭제'
btn.setAttribute('class','btn btn-danger')
btn.addEventListener('click', (e) => {
  
  e.stopPropagation()
  e.target.parentElement.parentElement.remove();
},false)
td.appendChild(btn)
tr.appendChild(td)
return tr;
}

document.querySelector('thead input[type="checkbox"]').addEventListener('change',(e)=>{
  console.log(e.target.checked)
  document.querySelectorAll('tbody input[type="checkbox"]')
  .forEach((item)=>{item.checked=e.target.checked;
  });
 })

 document.querySelector('button.btn.btn-danger').addEventListener('click',(e)=>{
  document.querySelectorAll('#list tr')
  .forEach((item)=>{
    console.log(item.children[0].children[0])
    if(item.children[0].children[0].checked){
      item.remove();
    }
      
    
  })
})