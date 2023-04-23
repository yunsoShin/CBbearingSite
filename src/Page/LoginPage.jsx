import React from 'react';
import { login, loginGoogle } from '../Api/firebase';

function LoginPage() {
  return (
    <main className="flex flex-auto items-center border border-slate-400 w-1/5">
            <button className='mx-5' onClick={loginGoogle}>
            <div className="method-control w-80">
                <span>구글로 간편로그인</span>
            </div>
            </button>
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