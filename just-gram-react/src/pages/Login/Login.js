import React from 'react'
import './Login.css';

function Login() {
  return (
      <div className="container">
        <h1>Justgram</h1>
        <div className="login-form">
          <input type="text" id="id-input" placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input type="password" id="pw-input" placeholder="비밀번호"/>
          <button id="login-btn">로그인</button>
        </div>
        <a href="/" id="search-pw">비밀번호를 잊으셨나요?</a>
      </div>
  )
}

export default Login;