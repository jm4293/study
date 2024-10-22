import React, { useState } from 'react';
import { AuthApi, ResponseCodeEnum } from '../../commons';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../../hooks';

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setSessionStory } = useSessionStorage();

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const response = await AuthApi.login({ email, password });

    if (!!response) {
      const { data, result } = response.data;

      if (result === ResponseCodeEnum.SUCCESS) {
        setSessionStory('token', response.headers['authorization'].split(' ')[1]);
        setSessionStory('email', data.email);
        setSessionStory('name', data.name);

        navigate('/board-list');
      }
    }
  };

  const onSignUpHandle = () => {
    navigate('/sign-up');
  };

  const onFindPasswordHandle = () => {
    navigate('/find-password');
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandle} className="login-form">
        <h2>로그인</h2>
        <div className="input-group">
          <label htmlFor="email">아이디</label>
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
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="button" className="find-password-button" onClick={onFindPasswordHandle}>
              비밀번호 변경
            </button>
            <button type="button" className="sign-up-button" onClick={onSignUpHandle}>
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
