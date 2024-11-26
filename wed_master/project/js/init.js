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
  pname: '귀를 기울이면',
  price: 1500,
  image: '귀를 기울이면.webp',
  mname: '중학교 3학년 시즈쿠는 평소 책을 많이 읽는 소녀이다. 여름방학,매번 도서카드에서 먼저 책을 빌려간 세이지란 이름을 발견하고 호기심을 갖는다.어느 날 아버지의 도시락을 전해주러 가는 길. 지하철 안에서 혼자 탄 고양이를 보게 된다.신기하게 여긴 시즈쿠는 고양이를 따라가다 골동품가게에 들어가게 되고,그곳에서 주인 할아버지와 손자를 보게 된다. 그 손자는 다름 아닌 아마사와 세이지,사춘기의 두 사람은 점차 서로의 사랑에 대해 알게 된다. 시즈쿠는 바이올린 장인을 자신의 장래로 확실히 정한 세이지를 보면서 자신의꿈과 미래를 진지하게 고민하게 된다. 그 후 이탈리아 연수를 간 세이지가 돌아 올 때까지작가가 되고자 도전해 보기로 하고 소설을 쓰게 된다.',
  link: 'https://www.youtube.com/embed/0pVkiod6V0U?si=jzFpWxxU_WIy97d2'
},
{
  pcode: 'P002',
  pname: '마녀배달부 키키',
  price: 1500,
  image: '마녀배달부 키키.jpg',
  mname: '어느 시골 마을에서 마녀의 피를 잇고 태어난 키키. 마녀가 되려는 소녀는 13살이 되던 보름달 뜬 밤 마녀가 없는 마을에서 1년을 수행하면 마녀가 될 수 있다는 전통을 따라,친구인 고양이 지지와 함께 빗자루를 타고 날아 바다를 건너 대도시에 도착한다.하지만 도시 사람들은 마녀를 전혀 반기지 않았다. 실망한 키키는 마을을 떠돌다가,물건을 두고 간 손님을 찾는 빵집 주인 오소노를 만난다.키키는 자신의 비행 능력으로 그 손님에게 물건을 전해주고 오소노는 그 보답으로 빵집 윗방에서 키키를 묵게 해준다.무언가 일거리를 찾던 키키는 빵집 일을 도우면서 마녀 배달 서비스를 개업한다.',
  link: 'https://www.youtube.com/embed/zbvx7pqw5Gg?si=sr20Y1Vp3KSVVS_n'
},
{
  pcode: 'P003',
  pname: '벼랑위의 포뇨',
  price: 1500,
  image: '벼랑위의 포뇨.webp',
  mname: '호기심 많은 물고기 소녀 ‘포뇨’는 따분한 바다 생활에 싫증을 느끼고,급기야 아빠 몰래 늘 동경하던 육지로 가출을 감행한다.해파리를 타고 육지로 올라온 ‘포뇨’는 그물에 휩쓸려 유리병 속에 갇히는 위기에 처하게되고 때마침 해변가에 놀러 나온 소년 ‘소스케’의 도움으로 구출된다.‘소스케’와의 즐거운 육지 생활도 잠시, 인간의 모습을 포기하고 바다의 주인이 된아빠 ‘후지모토’에 의해 결국 ‘포뇨’는 바다로 다시 돌아간다.하지만 여동생들의 도움으로 탈출에 성공한 ‘포뇨’는 소녀의 모습으로 변해 거대한 파도와 함께‘소스케’에게로 향하는데… 과연 포뇨는 어려움을 뚫고 소스케를 다시 만날 수 있을 것인가?',
  link: 'https://www.youtube.com/embed/h6XP82TyFWw?si=vXSxuSN-U-HxUjl_'
},
{
  pcode: 'P004',
  pname: '센과치히로의 행방불명',
  price: 1000,
  image: '센과치히로의 행방불명.webp',
  mname: '금지된 세계의 문이 열렸다! 이사 가던 날, 수상한 터널을 지나자 인간에게는 금지된 신들의 세계로 오게 된 치히로..신들의 음식을 먹은 치히로의 부모님은 돼지로 변해버린다.“걱정마, 내가 꼭 구해줄게…” 겁에 질린 치히로에게 다가온 정체불명의 소년 하쿠. 그의 따뜻한 말에 힘을 얻은 치히로는 인간 세계로 돌아가기 위해 사상 초유의 미션을 시작하는데…',
  link: 'https://www.youtube.com/embed/fDUFP7EeXLE?si=XtqhnZBCD2tkqJt5'
},
{
  pcode: 'P005',
  pname: '이웃집 토토로',
  price: 1000,
  image: '이웃집_토토로1.jpg',
  mname: '사츠키와 메이는 어머니의 병으로 인해 아버지와 도시에서 시골로 이사를 오게 된다.언니인 사츠키가 학교에 간 사이, 혼자 숲속에서 놀던 메이는 우연히 도토리를 지고 가던 토토로를 발견해 따라간다.이후 사츠키와 메이는 토토로와 함께 숲속에서 즐거운 시간을 보낸다.시간이 지난 어느 날, 병원에서 위급한 소식이 들려 오자 아버지는 급히 버스를 타고 어머니 병원으로 향하는 한편,자신도 엄마한테 가겠다고 떼쓰던 메이가 행방불명된다.',
  link: 'https://www.youtube.com/embed/92a7Hj0ijLs?si=pn-r9yeeoxte4u_3'
},
{
  pcode: 'P006',
  pname: '추억은 방울방울',
  price: 1000,
  image: '추억은 방울방울.webp',
  mname: '다카하타 이사오의 대표작으로, 오카모토 호타루와 도네 유코의 만화를 애니메이션화한 작품이다.오피스 레이디인 타에코는 야마가타로 휴가를 떠난다. 그곳에서 그녀는 귀농 청년 도시오를 만나고,둘은 점점 가까워진다. 평화로운 시골 마을에서 타에코는 열두 살 어린아이였던 시절의 아름다운 추억을 떠올린다. 여름 휴가가 끝난 후,도쿄로 돌아가던 타에코는 자신이 진정으로 원하는 것이 무엇인지 깨닫게 된다.',
  link: 'https://www.youtube.com/embed/OfkQlZArxw0?si=zs0jvvBfhUfkNL4U'
},
{
  pcode: 'P007',
  pname: '하울의 움직이는 성',
  price: 1500,
  image: '하울의 움직이는 성.webp',
  mname: '자신의 아름다움을 모른 채 평범하게 살던 한 소녀는 마녀의 질투로 저주에 걸려 할머니가 되고 만다.소녀는 마녀의 저주를 풀기 위해 마법사 하울을 찾아 떠나고 마침내 어딘가는 조금 이상해 보이는 하울의 움직이는 성에 들어가게 된다.그리고 청소부 할머니로 위장한 소녀는 하울과 악마 캘시퍼 그리고 하울의 제자와 오묘한 동거를 시작한다.',
  link: 'https://www.youtube.com/embed/iwROgK94zcM?si=k-5jqNhPDNHEq9RK'
},
{
  pcode: 'p008',
  pname: '바다가 들린다',
  price: 1000,
  image: '바다가 들린다.webp',
  mname: '도쿄에서 대학을 다니는 타쿠는 여름방학을 맞아 고향 코치 마을로 향하며 고등학교 시절의 추억을 떠올린다. 고등학교 시절, 도쿄에서 전학 왔던 리카쿠는 눈에 띄는 외모와 높은 성적으로 다른 학생들의 관심을 받고, 타쿠의 친구인 마츠노 역시 리카쿠를 짝사랑한다.',
  link: 'https://www.youtube.com/embed/tfkHiHjrqa8?si=9MW0BLJSxkk40G2d'
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