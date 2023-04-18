import React from 'react';
import { login, loginGoogle } from '../Api/firebase';
import NaverLoginFuntion from '../Api/NaverLoginApi';




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