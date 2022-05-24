import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Login.scss';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleIdInput = (e) => {
    setIdValue(e.target.value);
  }

  const handlePwInput = (e) => {
    setPwValue(e.target.value);
  }

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
      <div className="container">
        <h1>Justgram</h1>
        <div className="login-form">
          <input type="text" id="id-input" onChange={handleIdInput} placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input type="password" id="pw-input" onChange={handlePwInput} placeholder="비밀번호"/>
          <button onClick={goToMain}>로그인</button>
        </div>
        <a href="/" id="search-pw">비밀번호를 잊으셨나요?</a>
      </div>
  )
}

export default Login;