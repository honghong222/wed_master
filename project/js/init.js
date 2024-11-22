// id, pw, name
const memberData = [{
  id: 'user01',
  pw: '1111',
  name: '김태홍',
  responsibility: 'User'
},
{
  id: 'user02',
  pw: '2222',
  name: '홍길동',
  responsibility: 'User'
},
{
  id: 'user03',
  pw: '3333',
  name: '이길동',
  responsibility: 'Admin'
}
]



// pcode, pname, price
const productData = [{
  pcode: 'P001',
  pname: '이웃집 토토로',
  price: 1500,
  image: '이웃집 토토로.jpg'
},
{
  pcode: 'P002',
  pname: '하울의 움직이는 성',
  price: 1500,
  image: '하울의 움직이는 성.webp'
},
{
  pcode: 'P003',
  pname: '센과 치히로의 행방불명',
  price: 1500,
  image: '센과 치히로의 행방불명.webp'
},
{
  pcode: 'P004',
  pname: '추억은 방울방울',
  price: 1000,
  image: '추억은 방울방울.webp'
},
{
  pcode: 'P005',
  pname: '마녀배달부 키키',
  price: 1000,
  image: '마녀배달부 키키.jpg'
},
{
  pcode: 'P006',
  pname: '귀를 기울이면',
  price: 1000,
  image: '귀를 기울이면.webp'
},
{
  pcode: 'P007',
  pname: '벼랑위의 포뇨',
  price: 1500,
  image: '벼랑위의 포뇨.webp'
}
]

const cartData = [{
  id: 'user01',
  pcode: 'P001',
  qty: 2
},
{
  id: 'user01',
  pcode: 'P003',
  qty: 5
},
{
  id: 'user01',
  pcode: 'P002',
  qty: 3
},
{
  id: 'user02',
  pcode: 'P005',
  qty: 3
},
{
  id: 'user02',
  pcode: 'P004',
  qty: 2
}
]

// 객체의 정보를 활용해서 row 생성.
function makeRow(obj = {}) {
  let tr = document.createElement('tr');
  for (let prop in obj) {
    let td = document.createElement('td');
    td.innerHTML = obj[prop];
    tr.appendChild(td);
  }

  return tr;
}