import React from 'react';
import { login, loginGoogle } from '../Api/firebase';
import NaverLoginApi from '../Api/NaverLoginApi';
import { useEffect,useRef } from 'react'
import styled from 'styled-components'


function LoginPage() {


  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
          </div>
          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-line"></span>
          </div>
          <div className="method">
            <button className='mx-5' onClick={loginGoogle}>
            <div className="method-control w-80">
                <span>구글로 간편로그인</span>
            </div>
            </button>
          
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;


{/*<NaverLogin
      clientId={naverClientId}
      callbackUrl={naverCallbackUrl}
      onSuccess={onNaverLoginSuccess}
      onFailure={onNaverLoginError}
      render={(props) => <button onClick={props.onClick}>네이버 로그인</button>}
  />*/}


  const NaverIdLogin = styled.div`
	display: none;
`

const NaverLoginBtn = styled.button`
	display: flex;
	align-items: center;
	width: 360px;
	height: 56px;
	background-color: #03c75a;
	border-radius: 6px;
`

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 ! 
const NaverIcon = styled.div`
	width: 30px;
	height: 30px;
	margin-left: 10px;
	background: url('/images/Login/navericon.png') no-repeat center;
	background-size: 30px;
`

const NaverLoginTitle = styled.span`
	margin-left: 90px;
	color: ${({ theme }) => theme.White};
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
`
