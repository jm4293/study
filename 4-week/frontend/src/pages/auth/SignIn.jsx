import React, { useState } from 'react';
import { AuthApi, ResponseCodeEnum } from '../../commons';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const response = await AuthApi.login({ email, password });

    if (!!response) {
      const { code } = response.data;

      if (code === ResponseCodeEnum.SUCCESS) {
        navigate('/board-list');
      }
    }
  };

  const onSignUpHandle = () => {
    navigate('/sign-up');
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandle} className="login-form">
        <h2>로그인</h2>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button type="submit" className="sign-in-button">
            로그인
          </button>
          <button type="button" className="sign-up-button" onClick={onSignUpHandle}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
