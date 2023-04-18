import NaverLogin from 'react-naver-login';

export default function NaverLoginFuntion() {
  const naverClientId = process.env.REACT_APP_NAVER_CLIEN_ID
  const naverCallbackUrl = 'http://localhost:3000/LoginPage';
  const onNaverLoginSuccess = (naverUser) => {
    console.log(naverUser);
    // TODO: Firebase authentication with Naver user data
  };
  const onNaverLoginError = (error) => {
    console.error(error);
  };
}
