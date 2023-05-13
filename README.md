back-end - firebase

front-end - react

CSS - tailwind

libraries and pakage - tailwind,antd,context,react-router-dom,gh-pages,swiper,yarn

# cbbearin.co.kr

## 청북베어링상사 웹홈페이지

<img width="1919" alt="메인페이지" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/39d09082-0131-4b23-99d3-4d3c2ea2c0f2">

아버지를 위해 기본적인 웹 홈페이지를 구축하고싶었습니다.
상품목록을 불러와 해당하는 품번,제목,브랜드를 검색할수있는 기능과,

게시판형식이거나 문의를 할 수 있는 기능을 구현하면 좋겠다는 생각을 하였습니다
상품목록의 탐색,불러오기 기능은 firebase의 get data와 antd 를 활용해 구현하였고

추가적으로 로그인한 계정이 admin인 uid라면 상품목록의 update기능도 구현했으며 이미지와 같이 업데이트할 수 있도록 구현했고,
사용자가 의도되지않은 url로 방문시 notfound페이지로 돌아가게끔 ProtectedRoute 컴포넌트로 구현하였습니다.

## 1.로그인인증 Rest API

<img width="747" alt="로그인인증" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/6a43cddc-c85f-46da-b9d4-23e5bafa91ac">

firebase를 통해 구현한 구글로그인 인증로직
src/api/firebase.js

---

1.login
2.logout
3.onUserStateChange
4.adminUser 기능 구현

## 2.Q&A

<img width="1897" alt="문의하기 페이지" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/c1548a00-7888-45c3-bc21-bb86435505aa">

---

1.addNewQuestion
2.getQuestion / 게시판형식의 목록화된 페이지를 업데이트할 예정입니다

##3.제품등록 cloudinary + firebase API

<img width="1510" alt="제품등록" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/e0568616-c186-45de-9206-bbe04b5a895f">

<img width="626" alt="cloudinary연동" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/023f7ec7-7a2b-4e13-9e5d-566001bd9487">

1.getProducts
2.addNewProduct
3.useProducts / hook
\*ProductsQuery
\*\*addProduct

---

더 손쉽고 강력한 RESTful API를 사용하는 클라우드 기반 이미지 및 비디오 관리 서비스를 적용하였습니다 이미지 관리가 손쉬워졌습니다

##4.상품목록게시판 antd
<img width="1357" alt="어드민 삭제기능" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/efc06c6e-0f48-4cc4-8c34-e6f9b624fe60">

로그인한 유저가 있고, 그 유저가 어드민권한을가진 UID라면 delete버튼을 표시,삭제 기능을 구현함 firebase의 접속없이 웹에서 삭제기능을 수행할 수 있습니다

<img width="1356" alt="방문자 문의하기버튼" src="https://github.com/yunsoShin/CBbearingSite/assets/91814941/c52197bb-6fc7-4866-b255-3ceb6c2d8dd1">
반대로 접속유저가 어드민이 아닐때는 문의하기 버튼으로 이동시켜주었습니다

ProductList.jsx에 기능이 구현되어있습니다
